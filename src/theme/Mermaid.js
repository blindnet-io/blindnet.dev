import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
	startOnLoad: true
});

/**
 * Render mermaid diagrams
 * 
 * @see https://github.com/facebook/docusaurus/issues/1258#issuecomment-594393744
 * @param {*} param0 
 * @returns 
 */
const Mermaid = ({ chart }) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return <div className="mermaid">{chart}</div>;
};

export default Mermaid;