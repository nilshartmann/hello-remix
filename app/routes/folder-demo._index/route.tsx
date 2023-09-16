import {useRenderedAt} from "~/useRenderedAt";

export default function FolderDemoIndex() {
	const renderedAt = useRenderedAt("FolderDemoIndex");

	return <div style={{backgroundColor: "lightcyan"}}>
			<h1>Folder Demo Index</h1>
		{renderedAt}
	</div>
}