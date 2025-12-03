import { Experiences } from "@/types/resume";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Building2 } from "lucide-react";
import { ReactNode } from "react";

interface ExperiencesSectionProps {
  data: Experiences;
}

const renderDescription = (description: ReactNode): ReactNode => {
  if (typeof description === "string" && description.includes("<br/>")) {
    return description.split("<br/>").map((part, index, array) => (
      <span key={index}>
        {part}
        {index < array.length - 1 && <br />}
      </span>
    ));
  }
  return description;
};

const getTechnologyColor = (tech: string) => {
  const colors: Record<string, string> = {
    Typescript:
      "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30",
    React: "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
    "Next.js":
      "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30",
    "Nest.js": "bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/30",
    Golang:
      "bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-500/30",
    "C++": "bg-blue-600/20 text-blue-800 dark:text-blue-200 border-blue-600/30",
    Postgres:
      "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
    AWS: "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30",
    GraphQl:
      "bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-500/30",
    "Three.js":
      "bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30",
    Remix:
      "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30",
    "Express.js":
      "bg-gray-600/20 text-gray-800 dark:text-gray-200 border-gray-600/30",
    jQuery:
      "bg-blue-700/20 text-blue-900 dark:text-blue-100 border-blue-700/30",
    Pug: "bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30",
    MySQL: "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30",
    Lemonway:
      "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30",
    Qt: "bg-green-600/20 text-green-800 dark:text-green-200 border-green-600/30",
    OpenCV:
      "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
  };
  return colors[tech] || "bg-primary/20 text-primary border-primary/30";
};

export const ExperiencesSection = ({ data }: ExperiencesSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {data.cards.map((experience, index) => (
          <div
            key={index}
            className="p-5 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="size-4 text-muted-foreground" />
                  <h3 className="font-semibold text-lg">{experience.title}</h3>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {experience.company} • {experience.year}
                </p>
              </div>
              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <ExternalLink className="size-4" />
                </a>
              )}
            </div>

            {experience.description && (
              <p className="text-sm text-muted-foreground mb-4">
                {renderDescription(experience.description)}
              </p>
            )}

            {experience.clients && (
              <div className="space-y-4 mt-4">
                {experience.clients.map((client, clientIndex) => (
                  <div
                    key={clientIndex}
                    className="pl-4 border-l-2 border-primary/20"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{client.name}</h4>
                      {client.link && (
                        <a
                          href={client.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          <ExternalLink className="size-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {client.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {client.technologies.map((tech) => (
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
            )}

            {experience.footer && (
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium text-sm mb-2">
                  {experience.footer.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {experience.footer.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.footer.technologies.map((tech) => (
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
