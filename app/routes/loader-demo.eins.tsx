import {useRenderedAt} from "~/useRenderedAt";
import {apiDummy} from "~/api-dummy";
import ShowLoaderData from "~/ShowLoaderData";

export async function loader() {
	return apiDummy("LoaderDemo Eins")
}

export default function LoaderDemoEins() {
	const renderedAt = useRenderedAt("LoaderDemoEins");

	return	<div>
		<h1>LoaderDemo! Eins</h1>
		{renderedAt}
		<ShowLoaderData name={"LoaderDemoEins"} />
	</div>
}