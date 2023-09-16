import {useRenderedAt} from "~/useRenderedAt";

export default function DemoZwei() {

	const renderedAt = useRenderedAt("DemoZwei");

	return <div>
		<h1>DEMO ZWEI</h1>
		{renderedAt}
	</div>
}