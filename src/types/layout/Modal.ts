export interface ModalProps {
	children: React.ReactNode, 
	title: string,
	isOpen: boolean,
	closeFunc: () => void
}