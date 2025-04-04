import { useState } from "react";
// config
import { initialQuery } from "../config.js";
// components
import Container from "./Container";
import Header from "./Header";
import ImageList from "./ImageList.jsx";
import Footer from "./Footer";

export default function App() {
	const [query, setQuery] = useState(initialQuery);

	return (
		<Container>
			<Header setQuery={setQuery} />
			<ImageList query={query} />
			<Footer />
		</Container>
	);
}
