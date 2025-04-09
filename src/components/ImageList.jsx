import { useEffect, useState } from "react";
// config
import { ACCESS_KEY, BASE_URL, imagesPerPage } from "../config";
// components
import Image from "./Image";
import Loader from "./Loader";
import Message from "./Message";
// styles
import styles from "./ImageList.module.scss";

export default function ImageList({ query, page, setTotal, setTotalPages }) {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function fetchPhotos() {
			try {
				setIsLoading(true);
				const response = await fetch(
					`${BASE_URL}/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}&per_page=${imagesPerPage}`,
				);
				const data = await response.json();
				console.log(data);
				setImages(data.results);
				setTotal(data.total);
				setTotalPages(data.total_pages);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		}
		fetchPhotos();
	}, [query, page, setTotal, setTotalPages]);

	return (
		<main className={styles.main}>
			{isLoading ? (
				<Loader />
			) : (
				<ul className={styles.list}>
					{images.length === 0 ? <Message /> : images.map((image) => <Image key={image.id} image={image} />)}
				</ul>
			)}
		</main>
	);
}
