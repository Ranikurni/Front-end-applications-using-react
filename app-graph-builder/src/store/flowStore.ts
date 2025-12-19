import { create } from "zustand";
import type { Node, Edge } from "reactflow";

interface FlowStore {
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  setSelectedNode: (node: Node | null) => void;
}

export const useFlowStore = create<FlowStore>((set) => ({
  nodes: [
    {
      id: "1",
      data: { label: "Node 1" },
      position: { x: 100, y: 100 },
    },
  ],
  edges: [],
  selectedNode: null,
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  setSelectedNode: (node) => set({ selectedNode: node }),
}));
