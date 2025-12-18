import { create } from "zustand";
import type { Node } from "reactflow";

interface Store {
  nodes: Node[];
  selectedNode: Node | null;
  setNodes: (nodes: Node[]) => void;
  setSelectedNode: (node: Node | null) => void;
}

export const useStore = create<Store>((set) => ({
  nodes: [],
  selectedNode: null,
  setNodes: (nodes) => set({ nodes }),
  setSelectedNode: (node) => set({ selectedNode: node }),
}));
