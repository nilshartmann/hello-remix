import type { MetaFunction } from "@remix-run/node";
import {Link} from "@remix-run/react";
import {useRenderedAt} from "~/useRenderedAt";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const renderedAt = useRenderedAt("Index");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
     <h1>Index</h1>
      {renderedAt}

      <ul>
        <li><Link to={"/demo"}>Zur Demo</Link></li>
        <li><Link to={"/folder-demo"}>Zur Folder Demo</Link></li>
        <li><Link to={"/loader-demo"}>Zur Loader Demo</Link></li>


      </ul>

    </div>
  );
}
