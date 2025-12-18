import React from "react";
import { useFlowStore } from "../store/flowStore";

const RightPanel: React.FC = () => {
  const { selectedNode } = useFlowStore();

  if (!selectedNode) return <div className="p-4">No node selected</div>;

  return (
    <div className="w-64 p-4 border-l border-gray-200">
      <h2 className="font-bold text-lg">Node Details</h2>
      <p>ID: {selectedNode.id}</p>
      <p>Type: {selectedNode.type}</p>
      <p>Position: {selectedNode.position.x}, {selectedNode.position.y}</p>
    </div>
  );
};

export default RightPanel;
