import React from "react";
import { Form, Input, ButtonContact, TextArea } from "./styles";

const FormContact = ({ form, setForm, submitted, setSubmitted }) => {
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
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
