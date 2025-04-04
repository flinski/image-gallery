import { useEffect, useState } from "react";
// config
import { ACCESS_KEY, BASE_URL } from "../config";
// components
import Image from "./Image";
import Loader from "./Loader";
// styles
import styles from "./ImageList.module.scss";

export default function ImageList({ query }) {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function fetchPhotos() {
			try {
				setIsLoading(true);
				const response = await fetch(`${BASE_URL}/search/photos/?client_id=${ACCESS_KEY}&query=${query}&per_page=18`);
				const data = await response.json();
				console.log(data);
				setImages(data.results);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		}
		fetchPhotos();
	}, [query]);

	return (
		<main>
			<ul className={styles.list}>
				{isLoading ? <Loader /> : images.map((image) => <Image key={image.id} image={image} />)}
			</ul>
		</main>
	);
}
