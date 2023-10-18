import styles from '../../styles/layout/Header.module.scss';

function Header() {

	return (
		<header className={styles.header}>
			<div className={styles.headerAppname}>
				<p className={styles.headerAppnameText}>
					<span>TODO</span> App
				</p>
				<p className={styles.headerAppnameSubtext}>
					Avalio recruit. proj.
				</p>
			</div>
		</header>
	)
}

export default Header;