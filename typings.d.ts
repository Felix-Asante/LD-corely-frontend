interface ModalProps {
	open: boolean;
	onClose: () => void;
}

interface User {
	blocked: boolean;
	confirmed: boolean;
	createdAt: string;
	email: string;
	id: number;
	provider: string;
	surname: string;
	updatedAt: string;
	username: string;
	workspaceName: string;
}
