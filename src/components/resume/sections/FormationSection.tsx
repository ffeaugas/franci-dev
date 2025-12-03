import { Formations } from "@/types/resume";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

interface FormationSectionProps {
  data: Formations;
}

const getTechnologyColor = (tech: string) => {
  const colors: Record<string, string> = {
    C: "bg-blue-600/20 text-blue-800 dark:text-blue-200 border-blue-600/30",
    "C++": "bg-blue-600/20 text-blue-800 dark:text-blue-200 border-blue-600/30",
    Typescript:
      "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30",
    Docker:
      "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30",
    "Nest.js": "bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/30",
    "Next.js":
      "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30",
    PostgreSQL:
      "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
    Python:
      "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30",
    VBA: "bg-green-600/20 text-green-800 dark:text-green-200 border-green-600/30",
  };
  return colors[tech] || "bg-primary/20 text-primary border-primary/30";
};

export const FormationSection = ({ data }: FormationSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {data.cards.map((formation, index) => (
          <div
            key={index}
            className="p-5 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="size-4 text-muted-foreground" />
                <h3 className="font-semibold text-lg">{formation.title}</h3>
              </div>
              <span className="text-xs text-muted-foreground">
                {formation.year}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {formation.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {formation.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className={`${getTechnologyColor(tech)} text-xs`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
