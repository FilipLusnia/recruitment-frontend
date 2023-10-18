import { useState } from 'react';
import styles from '../../styles/list/ListItem.module.scss';

import CloseIcon from '../../assets/icons/close_icon.svg?react';
import EditIcon from '../../assets/icons/edit_icon.svg?react';
import TrashIcon from '../../assets/icons/trash_icon.svg?react';

function ListItem() {
	const [ confirmDelete, setConfirmDelete ] = useState(false);

	return (
		<div className={styles.item}>
			<div className={styles.itemTop}>
				<h2>Task</h2>
				<div className={styles.itemTopButtons}>
					<button className={styles.itemTopButtonsSingle} title="Edit task" aria-label='edit'>
						<EditIcon/>
					</button>
					{confirmDelete ?
						<div className={styles.itemTopButtonsDelete}>
							<button className={styles.itemTopButtonsSingle} onClick={() => setConfirmDelete(false)} title="Cancel deletion" aria-label='cancel'>
								<CloseIcon/>
							</button>
							<p>Delete?</p>
							<button className={styles.itemTopButtonsSingle} title="Delete task" aria-label='delete'>
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
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iusto velit recusandae consectetur facere reprehenderit. Sit, omnis. Nesciunt, nemo iste.</p>
			<button className={styles.itemDonebtn}>Done</button>
		</div>
	)
}

export default ListItem;