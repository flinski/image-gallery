// styles
import styles from "./Stats.module.scss";

export default function Stats({ page, total, totalPages }) {
	return (
		<div className={styles.stats}>
			<span>Results: {total}</span>
			<span>
				Page: {page} / {totalPages}
			</span>
		</div>
	);
}
