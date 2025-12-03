import { Projects } from "@/types/resume";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FolderKanban } from "lucide-react";

interface ProjectsSectionProps {
  data: Projects;
}

const getTechnologyColor = (tech: string) => {
  const colors: Record<string, string> = {
    Typescript:
      "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30",
    React: "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
    "Next.js":
      "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30",
    Postgres:
      "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
    Vercel:
      "bg-black/20 text-black dark:text-white border-black/30 dark:border-white/30",
    WebGL:
      "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30",
    PHP: "bg-indigo-600/20 text-indigo-800 dark:text-indigo-200 border-indigo-600/30",
    Wordpress:
      "bg-blue-600/20 text-blue-800 dark:text-blue-200 border-blue-600/30",
    Javascript:
      "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30",
  };
  return colors[tech] || "bg-primary/20 text-primary border-primary/30";
};

export const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {data.cards.map((project, index) => (
          <div
            key={index}
            className="p-5 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <FolderKanban className="size-4 text-muted-foreground" />
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  {project.year}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
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
