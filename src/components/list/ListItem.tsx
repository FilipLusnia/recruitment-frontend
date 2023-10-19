import { useState, useCallback } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { changeTodoState, deleteTodo, editTodo } from '../../redux/slices/todoSlice';
import { ListItemProps } from '../../types/list/ListItem';
import Modal from '../layout/Modal';
import styles from '../../styles/list/ListItem.module.scss';
import modalStyles from '../../styles/layout/Modal.module.scss';

import CloseIcon from '../../assets/icons/close_icon.svg?react';
import EditIcon from '../../assets/icons/edit_icon.svg?react';
import TrashIcon from '../../assets/icons/trash_icon.svg?react';

function ListItem({ title, desc, id, completed }: ListItemProps) {
	const [ todoContent, setTodoContent ] = useState({ title: title, id: id, desc: desc, completed: completed })
	const [ editMode, setEditMode ] = useState(false);
	const [ confirmDelete, setConfirmDelete ] = useState(false);
	const dispatch = useAppDispatch();
	
	const closeModal = useCallback(() => {
		setEditMode(false)
	}, [])

	const changeTodo = () => {
		dispatch(editTodo({ ...todoContent }))
		closeModal()
	}

	return (
		<>
			<Modal title="Edit TODO" isOpen={editMode} closeFunc={closeModal}>
				<label>
					<p>Title</p>
					<input value={todoContent.title} onChange={e => setTodoContent({ ...todoContent, title: e.target.value })} placeholder="Title"/>
				</label>
				<label>
					<p>Description (optional)</p>
					<textarea value={todoContent.desc} onChange={e => setTodoContent({ ...todoContent, desc: e.target.value })} placeholder="Description"/>
				</label>
				<div className={modalStyles.modalButtons}>
					<button className={modalStyles.modalButtonsSingle} onClick={() => changeTodo()} disabled={todoContent.title.length === 0}>
						{todoContent.title.length === 0 ? 'No title provided' : 'Edit'}
					</button>
					<button className={`${modalStyles.modalButtonsSingle} ${modalStyles.Alt}`} onClick={closeModal}>Cancel</button>
				</div>
			</Modal>

			<div className={styles.item}>
				<div className={styles.itemTop}>
					<h2>{title}</h2>
					<div className={styles.itemTopButtons}>
						<button onClick={() => setEditMode(true)} className={styles.itemTopButtonsSingle} title="Edit task" aria-label='edit'>
							<EditIcon/>
						</button>
						{confirmDelete ?
							<div className={styles.itemTopButtonsDelete}>
								<button className={styles.itemTopButtonsSingle} onClick={() => setConfirmDelete(false)} title="Cancel deletion" aria-label='cancel'>
									<CloseIcon/>
								</button>
								<p>Delete?</p>
								<button onClick={() => dispatch(deleteTodo(id))} className={styles.itemTopButtonsSingle} title="Delete task" aria-label='delete'>
									<TrashIcon/>
								</button>
							</div>
						:
							<button className={styles.itemTopButtonsSingle} onClick={() => setConfirmDelete(true)} title="Delete task" aria-label='delete'>
								<TrashIcon/>
							</button>
						}
					</div>
				</div>
				<p>{desc}</p>
				<button onClick={() => dispatch(changeTodoState(id))} className={styles.itemDonebtn}>Done</button>
			</div>
		</>
	)
}

export default ListItem;