import { useState, useCallback } from 'react';
import ListItem from './ListItem';
import CompletedListItem from './CompletedListItem';
import Modal from '../layout/Modal';
import styles from '../../styles/list/ListContainer.module.scss';
import modalStyles from '../../../src/styles/layout/Modal.module.scss';

import PlusIcon from '../../assets/icons/plus_icon.svg?react';

const emptyTodo = { title: '', desc: '' };

function ListContainer() {
	const [ addMode, setAddMode ] = useState(false);
	const [ newTodo, setNewTodo ] = useState({ ...emptyTodo })
	
	const cancelModal = useCallback(() => {
		setAddMode(false)
		setNewTodo({ ...emptyTodo })
	}, [])

	return (
		<>
			<Modal title="Add TODO" isOpen={addMode} closeFunc={() => cancelModal()}>
				<label>
					<p>Title</p>
					<input value={newTodo.title} onChange={e => setNewTodo({ ...newTodo, title: e.target.value })} placeholder="Title"/>
				</label>
				<label>
					<p>Description (optional)</p>
					<textarea value={newTodo.desc} onChange={e => setNewTodo({ ...newTodo, desc: e.target.value })} placeholder="Description"/>
				</label>
				<div className={modalStyles.modalButtons}>
					<button className={modalStyles.modalButtonsSingle} disabled={newTodo.title.length === 0}>{newTodo.title.length === 0 ? 'No title provided' : 'Add'}</button>
					<button className={`${modalStyles.modalButtonsSingle} ${modalStyles.Alt}`} onClick={() => cancelModal()}>Cancel</button>
				</div>
			</Modal>
			
			<div className={styles.container}>
				<div className={styles.list}>
					<p className={styles.listLabel}>Your list:</p>
					<div className={styles.listItems}>
						<ListItem/>
						<ListItem/>
						<CompletedListItem/>
						<CompletedListItem/>
					</div>
					<div className={styles.listAdd}>
						<button className={styles.listAddBtn} onClick={() => setAddMode(true)}>
							<p>Add TODO</p>
							<PlusIcon/>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ListContainer;