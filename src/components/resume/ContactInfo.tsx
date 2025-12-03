import { Mail, Phone, Github, Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactInfo = () => {
  return (
    <div className="h-[20%] flex items-center sm:gap-6 gap-2 sm:px-6 px-2 md:justify-start justify-center w-full">
      <div className="relative shrink-0 sm:w-22 w-16 sm:h-22 h-16">
        <img
          src="/me.jpg"
          alt="Photo de moi"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col xl:flex-row justify-between w-fit md:w-full gap-2 xl:gap-0">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Francis Feaugas</h2>
            <h3 className="text-xs text-muted-foreground">
              Développeur Full-Stack Freelance
            </h3>
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <a
              href="mailto:contact@franci.dev"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="xl:w-4 w-3" />
              <span>feaugas.francis@gmail.com</span>
            </a>
            <a
              href="tel:+33612345678"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="xl:w-4 w-3" />
              <span className="tracking-tight">06 83 91 57 61</span>
            </a>
          </div>
        </div>
        <ButtonGroup />
      </div>
    </div>
  );
};

const ButtonGroup = () => {
  return (
    <div className="flex xl:gap-2 gap-1 items-start justify-start h-full">
      <a
        href="https://www.linkedin.com/in/francis-feaugas-43269128b/"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-primary hover:bg-primary/60 flex items-center justify-center xl:size-8 size-6 transition-colors"
      >
        <Linkedin className="xl:w-4 w-3" />
      </a>
      <a
        href="https://github.com/ffeaugas"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-black hover:bg-black/60 flex items-center justify-center xl:size-8 size-6 transition-colors"
      >
        <Github className="xl:w-4 w-3 text-white" />
      </a>
      <Button
        variant="outline"
        size="sm"
        className="shrink-0 xl:h-8 h-6"
        onClick={() => {
          window.open("/CV-Francis_Feaugas.pdf", "_blank");
        }}
      >
        <Download className="xl:w-4 w-3" />
        <span className="xl:text-sm text-xs">CV (pdf)</span>
      </Button>
    </div>
  );
};
