import FlowCanvas from "@/components/FlowCanvas";
import RightPanel from "@/components/RightPanel";

export default function App() {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <FlowCanvas />
      </div>
      <RightPanel />
    </div>
  );
}
