import React, { useState } from "react";
import { FormContact } from "../../components";
import { Container, Section, Modal, ModalContainer } from "./styles";
import { Icons } from "../../utils";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);
	const [isModal, setIsModal] = useState(0);

	if (submitted) {
		console.log(form);
	}

	return (
		<Section id="contact">
			<Modal scale={isModal}>
				<ModalContainer>
					<div>
						<h3>Terima kasih! </h3>
						<p>Pesan Anda telah dikirim.</p>
					</div>

					<button onClick={() => setIsModal(0)}>
						<Icons.X />
					</button>
				</ModalContainer>
			</Modal>
			<Container>
				<h2>Hubungi Saya</h2>
				{/* kirim smua state ke FormContact component */}
				<FormContact
					form={form}
					setForm={(frm) => setForm(frm)}
					submitted={submitted}
					setSubmitted={(smt) => setSubmitted(smt)}
					setIsModal={(mdl) => setIsModal(mdl)}
				/>
			</Container>
		</Section>
	);
};

export default Contact;
