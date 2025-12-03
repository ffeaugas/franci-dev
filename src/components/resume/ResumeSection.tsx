import { ContactInfo } from "./ContactInfo";
import { ResumeContent } from "./ResumeContent";

export const ResumeSection = () => {
  return (
    <div className="absolute top-0 left-0 xl:w-1/2 md:w-[60%] w-full h-dvh overflow-hidden xl:p-10 md:p-6 p-0">
      <div className="w-full h-full bg-background/70 backdrop-blur-sm border-r shadow-lg overflow-hidden flex flex-col rounded-lg">
        <ContactInfo />
        <ResumeContent />
      </div>
    </div>
  );
};
