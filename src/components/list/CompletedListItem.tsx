import { useState } from 'react';
import styles from '../../styles/list/CompletedListItem.module.scss';

import CheckIcon from '../../assets/icons/check_icon.svg?react';
import CloseIcon from '../../assets/icons/close_icon.svg?react';
import UndoIcon from '../../assets/icons/undo_icon.svg?react';
import TrashIcon from '../../assets/icons/trash_icon.svg?react';

function CompletedListItem() {
	const [ confirmDelete, setConfirmDelete ] = useState(false);

	return (
		<div className={styles.item}>
			<div className={styles.itemTop}>
				<div className={styles.itemTopTitle}>
					<h2>Task</h2>
					<CheckIcon/>
				</div>
				<div className={styles.itemTopButtons}>
					<button className={styles.itemTopButtonsSingle} title="Undo completing" aria-label='undo'>
						<UndoIcon/>
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
		</div>
	)
}

export default CompletedListItem;