import {Link, Outlet, useNavigate, useNavigation} from "@remix-run/react";
import {useRenderedAt} from "~/useRenderedAt";
import {apiDummy} from "~/api-dummy";
import ShowLoaderData from "~/ShowLoaderData";
import {useTransition} from "react";

export async function loader() {
	return apiDummy("LoaderDemoLayout")
}

export default function LoaderDemoLayout() {
	const renderedAt = useRenderedAt("LoaderDemoLayout");
	const navigation = useNavigation();

	return	<div>
		<h1>LoaderDemo! Layout</h1>
		{renderedAt}
	<ShowLoaderData name={"LoaderDemoLayout"} />

	<Outlet/>

		<div style={{"border": "1px solid gray"}}>
		<ul>
			<li><Link to={"/"}>Root Index</Link></li>
			<li><Link to={"/loader-demo"}>Loader Demo Index</Link></li>
			<li><Link to={"eins"}>Eins</Link></li>
			<li><Link to={"zwei"}>Zwei</Link></li>
		</ul>
			{navigation.state === "loading" && <p>ROUTE WIRD GELADEN!</p>}
		</div>

	</div>
}