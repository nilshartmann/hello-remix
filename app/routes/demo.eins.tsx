import {useRenderedAt} from "~/useRenderedAt";

export default function DemoEins() {

	const renderedAt = useRenderedAt("DemoEins");

	return <div>
		<h1>DEMO EINS</h1>
		{renderedAt}
	</div>
}