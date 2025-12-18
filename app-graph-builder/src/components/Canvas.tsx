import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import { useStore } from '../store/store';

export default function Canvas() {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);
  const setSelectedNode = useStore((s) => s.setSelectedNode);

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={(_, node) => setSelectedNode(node)}
      />
    </div>
  );
}
