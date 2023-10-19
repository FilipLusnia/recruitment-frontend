import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { changeTodoState, deleteTodo } from '../../redux/slices/todoSlice';
import styles from '../../styles/list/CompletedListItem.module.scss';
import { ListItemProps } from '../../types/list/ListItem';
import { transitionTime } from '../../constants';

import CheckIcon from '../../assets/icons/check_icon.svg?react';
import CloseIcon from '../../assets/icons/close_icon.svg?react';
import UndoIcon from '../../assets/icons/undo_icon.svg?react';
import TrashIcon from '../../assets/icons/trash_icon.svg?react';

function CompletedListItem({ title, desc, id }: ListItemProps) {
	const [ confirmDelete, setConfirmDelete ] = useState(false);
	const [ disappearDelay, setDisappearDelay ] = useState(false);
	const dispatch = useAppDispatch();

	return (
		<div className={`${styles.item} ${disappearDelay ? styles.DisappearTile : ''}`}>
			<div className={styles.itemTop}>
				<div className={styles.itemTopTitle}>
					<h2>{title}</h2>
					<CheckIcon/>
				</div>
				<div className={styles.itemTopButtons}>
					<button onClick={() => dispatch(changeTodoState(id))} className={styles.itemTopButtonsSingle} title="Undo completing" aria-label='undo'>
						<UndoIcon/>
					</button>
					{confirmDelete ?
						<div className={styles.itemTopButtonsDelete}>
							<button className={styles.itemTopButtonsSingle} onClick={() => setConfirmDelete(false)} title="Cancel deletion" aria-label='cancel'>
								<CloseIcon/>
							</button>
							<p>Delete?</p>
							<button 
								onClick={() => {
									setDisappearDelay(true)
									setTimeout(() => {
										dispatch(deleteTodo(id))
									}, transitionTime)
								}} 
								className={styles.itemTopButtonsSingle} 
								title="Delete task" 
								aria-label='delete'
							>
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
		</div>
	)
}

export default CompletedListItem;