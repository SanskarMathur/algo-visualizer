import { Modal } from "react-bootstrap";
import "./MoreShapesModal.css";

const MoreShapesModal = ({ show, onClose }) => {
	const shapes = ["Polygon", "Star", "Hexagon", "Ellipse"];

	return (
		<Modal show={show} onHide={onClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Select More Shapes</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ul className="shape-list">
					{shapes.map((shape) => (
						<li key={shape} className="shape-item">
							{shape}
						</li>
					))}
				</ul>
			</Modal.Body>
		</Modal>
	);
};

export default MoreShapesModal;
