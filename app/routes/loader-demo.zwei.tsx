import {useRenderedAt} from "~/useRenderedAt";
import {apiDummy} from "~/api-dummy";
import ShowLoaderData from "~/ShowLoaderData";

export async function loader() {
	return apiDummy("LoaderDemo Zwei", 600)
}

export default function LoaderDemoZwei() {
	const renderedAt = useRenderedAt("LoaderDemoZwei");

	return	<div>
		<h1>LoaderDemo! Zwei</h1>
		{renderedAt}
		<ShowLoaderData name={"LoaderDemoZwei"} />

	</div>
}