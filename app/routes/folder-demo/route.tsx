import {useRenderedAt} from "~/useRenderedAt";
import {Link, Outlet} from "@remix-run/react";

export default function FolderDemoLayout() {
	const renderedAt = useRenderedAt("FolderDemoLayout");

	return <div style={{backgroundColor: "lightblue"}}>
			<h1>Folder Demo Layout</h1>
		{renderedAt}

		<div style={{"padding": "1rem"}}>
			<Outlet/>
		</div>

		<ul>
			<li><Link to={"/"}>Index</Link></li>
			<li><Link to={"/folder-demo"}>Folder Demo Index </Link></li>
			<li><Link to={"eins"}>Folder Demo Eins</Link></li>
			<li><Link to={"zwei"}>Folder Demo Zwei</Link></li>
		</ul>
	</div>
}