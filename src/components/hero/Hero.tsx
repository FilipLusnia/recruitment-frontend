import styles from '../../styles/hero/Hero.module.scss';

function Hero() {

	return (
		<div className={styles.container}>
			<h1>
				<span className={styles.animtextAlt}>Don't forget</span><br/>
				<span className={styles.animtext}>&nbsp;what's important to</span>
				<span className={styles.animtextAlt}>&nbsp;You</span>
				<span className={styles.animtext}>.</span>
			</h1>
		</div>
	)
}

export default Hero;