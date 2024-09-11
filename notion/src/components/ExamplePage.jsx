import EachSection from "./EachSection";
import todo from "../assets/images/checklist.png";
import img from "../assets/images/plan-v5.png";

const ExamplePage = () => {
     const sections = [
     {
          image: todo,
          imageAlt: "Checklist",
          title: "Tasks and to-dos",
          description: "Tackle any project, big or small."
     },
     {
          image: todo,
          imageAlt: "Checklist",
          title: "Tasks and to-dos",
          description: "Tackle any project, big or small."
     },
     {
          image: todo,
          imageAlt: "Checklist",
          title: "Tasks and to-dos",
          description: "Tackle any project, big or small."
     }
     ];

     return (
          <EachSection
               buttonName="Plan"
               title="Your workflow. Your way."
               description="There’s a lot to keep track of. Notion’s flexible pages allow you to design your ideal workflow and view it by timeline, task, team, or level of doneness."
               linkText="Explore projects"
               sections={sections}
               imageSrc={img}
          />
     );
};

export default ExamplePage;