import ThreeCanvas from "@/components/ThreeCanvas";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="w-full h-dvh relative">
      <ThreeCanvas />
      <div className="absolute top-0 left-0 w-full h-full">coucou</div>
    </div>
  );
}
