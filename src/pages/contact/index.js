import React, { useState } from "react";
import {
	Wraper,
	ContactContainer,
	ContactForm,
	ContactButton,
	ContactInput,
	ContactTextArea,
} from "../../styles";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		msg: "",
	});

	const change = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	const submit = (e) => {
		e.preventDefault();
		console.log("Form Submit:", formData);
	};
	return (
		<Wraper>
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
