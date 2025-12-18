import ReactFlow, { Background, Controls, applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";
import type { NodeChange, EdgeChange, Connection } from "reactflow"; // type-only imports
import "reactflow/dist/style.css";
import { useFlowStore } from "@/store/flowStore";

export default function FlowCanvas() {
  const { nodes, edges, setNodes, setEdges } = useFlowStore();

  const onNodesChange = (changes: NodeChange[]) =>
    setNodes(applyNodeChanges(changes, nodes));

  const onEdgesChange = (changes: EdgeChange[]) =>
    setEdges(applyEdgeChanges(changes, edges));

  const onConnect = (connection: Connection) =>
    setEdges(addEdge(connection, edges));

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}