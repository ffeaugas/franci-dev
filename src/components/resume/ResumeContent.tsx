import { useState } from "react";
import { Button } from "@/components/ui/button";
import { resumeDatas } from "@/const/resumeDatas";
import { resumeSections, type ResumeSectionType } from "@/types/resume";
import { PresentationSection } from "./sections/PresentationSection";
import { ExperiencesSection } from "./sections/ExperiencesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { FormationSection } from "./sections/FormationSection";

export const ResumeContent = () => {
  const [activeSection, setActiveSection] =
    useState<ResumeSectionType>("presentation");

  const sections = resumeSections;

  const renderSection = () => {
    switch (activeSection) {
      case "presentation":
        return <PresentationSection data={resumeDatas.presentation} />;
      case "experiences":
        return <ExperiencesSection data={resumeDatas.experiences} />;
      case "projects":
        return <ProjectsSection data={resumeDatas.projects} />;
      case "formation":
        return <FormationSection data={resumeDatas.formation} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-[80%] flex flex-col pb-10 sm:pb-4">
      <div className="flex gap-2 md:px-6 px-2 py-3 border-b overflow-x-auto">
        {sections.map((section) => {
          const sectionTitle = resumeDatas[section].title;

          return (
            <Button
              key={section}
              variant={activeSection === section ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection(section)}
              className="capitalize text-xs md:text-sm"
            >
              {sectionTitle}
            </Button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto sm:px-6 px-2 py-4">
        {renderSection()}
      </div>
    </div>
  );
};
