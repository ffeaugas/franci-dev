import { Button } from "@/components/ui/button";
import { Presentation } from "@/types/resume";
import * as LucideIcons from "lucide-react";

interface PresentationSectionProps {
  data: Presentation;
}

export const PresentationSection = ({ data }: PresentationSectionProps) => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{data.description}</p>
      <p className="text-xs">
        Disponible à partir de{" "}
        <span className="font-bold text-red-600">janvier 2026</span>
      </p>
      <div className="grid gap-4">
        {data.cards.map((card, index) => {
          const IconComponent = (LucideIcons as any)[card.icon] as
            | React.ComponentType<{ className?: string }>
            | undefined;

          return (
            <div
              key={index}
              className="md:p-4 p-2 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-start sm:gap-4 gap-2">
                {IconComponent && (
                  <div className="shrink-0 p-2 rounded-md bg-primary/10">
                    <IconComponent className="xl:size-5 sm:size-4 size-3 text-primary" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold xl:text-lg sm:text-base text-sm mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center my-4">
          <Button
            variant="outline"
            size="sm"
            className="w-fit h-fit sm:h-8 cursor-not-allowed"
          >
            <img src="/malt.svg" alt="Malt" className="size-4" />
            Profil Malt <br className="sm:hidden block" />
            disponible prochainement
          </Button>
        </div>
      </div>
    </div>
  );
};
