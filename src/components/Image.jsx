// styles
import styles from './Image.module.scss'

export default function Image({ image }) {
	return (
		<li className={styles.item}>
			<img className={styles.image} src={image.urls.regular} alt={image.alt_description} />
		</li>
	);
}
