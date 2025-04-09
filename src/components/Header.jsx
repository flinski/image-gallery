import { useRef } from "react";
// styles
import styles from "./Header.module.scss";

export default function Header({ setQuery, setPage }) {
	const inputRef = useRef("");

	function handleSubmitForm(e) {
		e.preventDefault();
		if (!inputRef.current.value) {
			return;
		}
		setQuery(inputRef.current.value);
		setPage(1);
	}

	function handleClearInput() {
		inputRef.current.value = "";
		// inputRef.current.focus();
	}

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Image Gallery</h1>
			<form className={styles.search} onSubmit={handleSubmitForm}>
				<button className={styles.btnGlass}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				<input className={styles.input} type="text" placeholder="Search..." size="1" ref={inputRef} />
				<button className={styles.btnCross} type="button" onClick={handleClearInput}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M19 5L4.99998 19M5.00001 5L19 19"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</form>
		</header>
	);
}
