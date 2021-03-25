import Header from "../../public/components/header";
import Main from "../../public/components/home-blocks/main";
import Tournament from "../../public/components/home-blocks/tournament";

export default function Home() {

function change() {
	console.log('changed');
	
}

	return (
		<div>
			<Header />
			<Main/>
			<Tournament change={change}/>
		</div>
	);
}
