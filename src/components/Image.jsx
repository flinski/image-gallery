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
				onLoad={handleLoadImage}
			/>
		</li>
	);
}
