import {useRenderedAt} from "~/useRenderedAt";

export default function FolderDemoZwei() {
	const renderedAt = useRenderedAt("FolderDemoZwei");

	return <div style={{backgroundColor: "lightcyan"}}>
			<h1>Folder Demo zwei</h1>
		{renderedAt}
	</div>
}