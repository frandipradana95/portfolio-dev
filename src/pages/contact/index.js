import React, { useState } from "react";
import { Popup } from "../../components";
import { db, addDoc, collection } from "../../config";
import {
	Wraper,
	ContactContainer,
	ContactForm,
	ContactButton,
	ContactInput,
	ContactTextArea,
} from "../../styles";

const Contact = () => {
	const [error, setError] = useState(false); // State untuk error
	const [showModal, setShowModal] = useState(false);
	const [closing, setClosing] = useState(false); // Untuk animasi keluar
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		msg: "",
	});

	const change = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	const submit = async (e) => {
		e.preventDefault();
		try {
			await addDoc(collection(db, "contacts"), {
				...formData,
				timestamp: new Date(),
			});
			setShowModal(true);
			setFormData({
				name: "",
				email: "",
				msg: "",
			});
		} catch (err) {
			setError("Gagal mengirim pesan. Coba lagi.");
			setError(true);
		}
	};

	const closeModal = () => {
		setClosing(true); // Mulai animasi keluar
		setTimeout(() => {
			setShowModal(false);
			setClosing(false);
		}, 300); // Durasi animasi keluar
	};
	return (
		<Wraper>
			{showModal && (
				<Popup closing={closing} closeModal={closeModal} type={error} />
			)}

			<ContactContainer>
				<ContactForm onSubmit={submit}>
					<h1>Contact Me</h1>

					<ContactInput
						type="text"
						name="name"
						placeholder="Name"
						value={formData.name}
						onChange={change}
						required
					/>
					<ContactInput
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={change}
						required
					/>
					<ContactTextArea
						name="msg"
						placeholder="Message..."
						value={formData.msg}
						onChange={change}
						required
					/>
					<ContactButton type="submit">Send</ContactButton>
				</ContactForm>
			</ContactContainer>
		</Wraper>
	);
};

export default Contact;
