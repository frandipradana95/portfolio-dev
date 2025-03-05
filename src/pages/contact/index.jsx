import React, { useEffect, useState } from "react";
import { FormContact } from "../../components";
import { Container, Section } from "./styles";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);
	useEffect(() => {
		if (submitted) {
			console.log(form);
		}
	});

	return (
		<Section id="contact">
			<Container>
				<h2>Hubungi Saya</h2>
				<FormContact
					form={form}
					setForm={(frm) => setForm(frm)}
					submitted={submitted}
					setSubmitted={(smt) => setSubmitted(smt)}
				/>
			</Container>
		</Section>
	);
};

export default Contact;
