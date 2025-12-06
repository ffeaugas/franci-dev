import { ContactInfo } from "./ContactInfo";
import { ResumeContent } from "./ResumeContent";

export const ResumeSection = () => {
  return (
    <div className="absolute top-0 left-0 xl:w-1/2 md:w-[60%] w-full h-dvh overflow-hidden xl:p-10 md:p-6 p-0">
      <div
        className="w-full h-full backdrop-blur-sm border-r shadow-lg overflow-hidden flex flex-col rounded-lg"
        style={{
          background:
            "linear-gradient(297deg,rgba(255, 255, 255, .5) 0%, rgba(245, 246, 250, .5) 34%, rgba(240, 240, 245, .7) 73%, rgba(245, 230, 235, .7) 100%)",
        }}
      >
        <ContactInfo />
        <ResumeContent />
      </div>
    </div>
  );
};
