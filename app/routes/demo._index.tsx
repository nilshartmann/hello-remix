import {useRenderedAt} from "~/useRenderedAt";

export default function DemoIndex() {
	const renderedAt = useRenderedAt("DemoIndex");

	return <div>
		<h1>Demo Index</h1>
		{renderedAt}
	</div>
}