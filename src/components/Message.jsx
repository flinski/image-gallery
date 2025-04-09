// styles
import styles from "./Message.module.scss";

export default function Message() {
	return (
		<div className={styles.message}>
			Sorry, no images were found for your query. Try searching for something else.
		</div>
	);
}
