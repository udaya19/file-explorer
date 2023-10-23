import { useState } from "react";

import explorer from "./data/folderData";

import Folder from "./components/Folder";

import useTraverseTree from "./hooks/use-traverse-tree";

import "./App.css";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, items, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, items, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

export default App;
