import { ResumeSection } from "@/components/resume/ResumeSection";
import ThreeCanvas from "@/components/ThreeCanvas";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="w-full h-dvh relative">
      <ThreeCanvas />
      <ResumeSection />
    </div>
  );
}
