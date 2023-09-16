import {useLoaderData} from "@remix-run/react";

export default function ShowLoaderData({name}:{name: string}) {
	const loaderData = useLoaderData();

	return <div>
		<h2>Loader data from {name}</h2>
		<code>
			<pre>
				{JSON.stringify(loaderData)}
			</pre>
		</code>
	</div>
}