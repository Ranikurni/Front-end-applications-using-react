import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type NodeChange,
  type EdgeChange,
  type Connection,
  type Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { useFlowStore } from "@/store/flowStore";

export default function FlowCanvas() {
  const { nodes, edges, setNodes, setEdges, setSelectedNode } = useFlowStore();

  const onNodesChange = (changes: NodeChange[]) =>
    setNodes(applyNodeChanges(changes, nodes));

  const onEdgesChange = (changes: EdgeChange[]) =>
    setEdges(applyEdgeChanges(changes, edges));

  const onConnect = (connection: Connection) =>
    setEdges(addEdge(connection, edges));

  const onNodeClick = (_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}
