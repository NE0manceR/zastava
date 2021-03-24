import Header from "../../public/components/header";
import Main from "../../public/components/home-blocks/main";
import Tournament from "../../public/components/home-blocks/tournament";

export default function Home() {

	return (
		<div>
			<Header />
			<Main/>
			<Tournament/>
		</div>
	);
}
