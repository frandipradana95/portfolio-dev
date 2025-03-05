import React from "react";
import { Form, Input, ButtonContact, TextArea } from "./styles";
import emailjs from "@emailjs/browser";

const FormContact = ({
	form,
	setForm,
	submitted,
	setSubmitted,
	setIsModal,
}) => {
	const handleChange = (e) => {
		setForm({ ...form, empty: true, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				"service_56d3gn7",
				"template_t89n8re",
				{
					to: "Frandi Pradana",
					name: form.name,
					email: form.email,
					message: form.message,
				},
				"eZ09wMcRGO1V2esSV"
			)
			.then(
				(response) => {
					console.log("Email terkirim!", response.status, response.text);
					setSubmitted(true);
					setIsModal(1);
					setForm({
						name: "",
						email: "",
						message: "",
						empty: true,
					});
				},
				(err) => {
					console.error("Gagal mengirim email:", err);
				}
			);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type="text"
				name="name"
				placeholder="Nama"
				value={form.name}
				onChange={handleChange}
				required
			/>
			<Input
				type="email"
				name="email"
				placeholder="Email"
				value={form.email}
				onChange={handleChange}
				required
			/>
			<TextArea
				name="message"
				placeholder="Pesan Anda"
				value={form.message}
				onChange={handleChange}
				required
			></TextArea>
			<ButtonContact type="submit">Kirim</ButtonContact>
		</Form>
	);
};

export default FormContact;
