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
				src={image.urls.small}
				alt={image.alt_description}
				width={331}
				height={331}
				onLoad={handleLoadImage}
			/>
		</li>
	);
}
