import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import ImageList from "./ImageList.jsx";
import Image from "./Image";
import Footer from "./Footer";

export default function App() {
	return (
		<Container>
			<Header />
			<Main>
				<ImageList>
					<Image />
				</ImageList>
			</Main>
			<Footer />
		</Container>
	);
}
