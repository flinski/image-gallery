// styles
import styles from "./Loader.module.scss";

export default function Loader() {
	return <div className={styles.loaderWrapper}>
		<span className={styles.loader}></span>
	</div>;
}
