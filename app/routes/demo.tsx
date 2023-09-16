import {Link, Outlet} from "@remix-run/react";
import {useRenderedAt} from "~/useRenderedAt";

export default function Demo() {
	const renderedAt = useRenderedAt("DemoLayout");

	return	<div>
		<h1>Demo! Layout</h1>
		{renderedAt}

	<Outlet/>

		<div style={{"border": "1px solid gray"}}>
		<ul>
			<li><Link to={"/"}>Root Index</Link></li>
			<li><Link to={"/demo"}>Demo Index</Link></li>
			<li><Link to={"eins"}>Eins</Link></li>
			<li><Link to={"zwei"}>Zwei</Link></li>
		</ul>
		</div>

	</div>
}