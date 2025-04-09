// styles
import styles from "./Pagination.module.scss";

export default function Pagination({ page, totalPages, setPage }) {
	function handlePreviousPage() {
		if (page === 1) return;
		setPage((curPage) => curPage - 1);
	}

	function handleNextPage() {
		if (page === totalPages) return;
		setPage((curPage) => curPage + 1);
	}

	return (
		<div className={styles.pagination}>
			<button
				className={styles.btnPrevious}
				type="button"
				disabled={page === 1 ? true : false}
				onClick={handlePreviousPage}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M15 7L10 12L15 17"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			<button
				className={styles.btnNext}
				type="button"
				disabled={page === totalPages ? true : false}
				onClick={handleNextPage}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10 7L15 12L10 17"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
}
