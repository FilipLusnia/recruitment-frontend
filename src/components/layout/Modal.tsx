import { useEffect, useState } from 'react';
import styles from '../../../src/styles/layout/Modal.module.scss';
import { ModalProps } from '../../types/layout/Modal';

import CloseIcon from '../../assets/icons/close_icon.svg?react';

function Modal({ children, title, isOpen, closeFunc }: ModalProps) {
	const [ renderModalContent, setRenderModalContent ] = useState(false);
	
    useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
		isOpen ? setRenderModalContent(true) : setTimeout(() => setRenderModalContent(false), 300) // 0.3s css transition
    }, [isOpen])
	
    return (
        <div className={`${styles.modalBackground} ${isOpen ? styles.bgVisible : ''}`}>
            <div className={`${styles.modal} ${isOpen ? styles.modalVisible : ''}`}>
				{renderModalContent && 
					<>
						<div className={styles.modalTop}>
							<div className={styles.modalTopUpper}>
								<button className={styles.modalTopUpperClose} onClick={closeFunc}>
									<CloseIcon className='modal_top_upper_close_icon'/>
								</button>
							</div>
							<h2 className={styles.modalTopTitle}>{(title && title.length > 0) ? title : 'Info'}</h2>
						</div>
						<div className={styles.modalContent}>
							{children}
						</div>
					</>
				}
            </div>
        </div>
    )
}  

export default Modal;