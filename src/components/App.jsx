import { useState } from "react";
// config
import { initialQuery } from "../config.js";
// components
import Container from "./Container";
import Header from "./Header";
import ImageList from "./ImageList.jsx";
import Footer from "./Footer";
import Stats from "./Stats.jsx";

export default function App() {
	const [query, setQuery] = useState(initialQuery);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	return (
		<Container>
			<Header setQuery={setQuery} />
			<Stats page={page} total={total} totalPages={totalPages} />
			<ImageList query={query} page={page} setTotal={setTotal} setTotalPages={setTotalPages} />
			<Footer />
		</Container>
	);
}
