import {useRenderedAt} from "~/useRenderedAt";

export default function FolderDemoEins() {
	const renderedAt = useRenderedAt("FolderDemoEins");

	return <div style={{backgroundColor: "lightcyan"}}>
			<h1>Folder Demo Eins</h1>
		{renderedAt}
	</div>
}