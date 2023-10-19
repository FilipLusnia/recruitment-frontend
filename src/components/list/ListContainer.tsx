import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addTodo } from '../../redux/slices/todoSlice';
import ListItem from './ListItem';
import CompletedListItem from './CompletedListItem';
import Modal from '../layout/Modal';
import { transitionTime } from '../../constants';
import styles from '../../styles/list/ListContainer.module.scss';
import modalStyles from '../../../src/styles/layout/Modal.module.scss';

import PlusIcon from '../../assets/icons/plus_icon.svg?react';

export const emptyTodo = { title: '', desc: '', completed: false, id: '' };

function ListContainer() {
	const todos = useAppSelector(state => state.todos);
	const dispatch = useAppDispatch();
	const [ addMode, setAddMode ] = useState(false);
	const [ todoContent, setTodoContent ] = useState({ ...emptyTodo })
	
	const closeModal = useCallback(() => {
		setAddMode(false)
		setTimeout(() => setTodoContent({ ...emptyTodo }), transitionTime) 
	}, [])
	
	const addNewTodo = () => {
		dispatch(addTodo({ ...todoContent, id: uuidv4() }))
		closeModal()
	}
	
	return (
		<>
			<Modal title="Add TODO" isOpen={addMode} closeFunc={closeModal}>
				<label>
					<p>Title</p>
					<input value={todoContent.title} onChange={e => setTodoContent({ ...todoContent, title: e.target.value })} placeholder="Title"/>
				</label>
				<label>
					<p>Description (optional)</p>
					<textarea value={todoContent.desc} onChange={e => setTodoContent({ ...todoContent, desc: e.target.value })} placeholder="Description"/>
				</label>
				<div className={modalStyles.modalButtons}>
					<button className={modalStyles.modalButtonsSingle} onClick={() => addNewTodo()} disabled={todoContent.title.length === 0}>
						{todoContent.title.length === 0 ? 'No title provided' : 'Add'}
					</button>
					<button className={`${modalStyles.modalButtonsSingle} ${modalStyles.Alt}`} onClick={closeModal}>Cancel</button>
				</div>
			</Modal>
			
			<div className={styles.container}>
				<div className={styles.list}>
					<p className={styles.listLabel}>Your list:</p>
					<div className={styles.listItems}>
						{todos
							.filter(todo => !todo.completed)
							.map(todo => <ListItem title={todo.title} desc={todo.desc} completed={todo.completed} id={todo.id} key={todo.id}/>)
						}
						{todos
							.filter(todo => todo.completed)
							.map(todo => <CompletedListItem title={todo.title} desc={todo.desc} completed={todo.completed} id={todo.id} key={todo.id}/>)
						}
						{todos.length === 0 && 
							<p className={styles.listItemsEmpty}>No todos. You can finally rest.</p>
						}
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