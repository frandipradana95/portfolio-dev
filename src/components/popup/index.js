import { ModalOverlay, Modal, ModalHeader, CloseButton } from "../../styles";
import { X } from "lucide-react";
import { Colors } from "../../styles/Colors";

const Popup = ({ type, closeModal, closing }) => {
	return (
		<ModalOverlay closing={closing}>
			<Modal
				closing={closing}
				style={{
					backgroundColor: !type ? Colors.alert.success : Colors.alert.danger,
				}}
			>
				<ModalHeader>
					<div>
						<h3>{!type ? "Success!" : "Error!"}</h3>
						<p>
							{!type
								? "your message has been sent, thank you for contacting me"
								: "Your message was not sent. Please try again"}
						</p>
					</div>
					<CloseButton onClick={closeModal}>
						<X />
					</CloseButton>
				</ModalHeader>
			</Modal>
		</ModalOverlay>
	);
};

export default Popup;
