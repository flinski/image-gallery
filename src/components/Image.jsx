import { useState } from "react";
// styles
import styles from "./Image.module.scss";

export default function Image({ image }) {
	const [loaded, setLoaded] = useState(false);

	function handleLoadImage() {
		setLoaded(true);
	}

	return (
		<li className={styles.item}>
			<img
				className={`${styles.image} ${!loaded ? "is-loading" : ""}`}
				src={image.urls.regular}
				alt={image.alt_description}
				width={330}
				height={330}
				onLoad={handleLoadImage}
			/>
			<a className={styles.link} href={image.urls.full} target="_blank">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</a>
		</li>
	);
}
