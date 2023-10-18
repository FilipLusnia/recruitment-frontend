import styles from '../../styles/hero/Hero.module.scss';

function Hero() {

	return (
		<div className={styles.container}>
			<h1>
				<span>Don't forget </span><br/>
				what's important to
				<span> You</span>.
			</h1>
		</div>
	)
}

export default Hero;