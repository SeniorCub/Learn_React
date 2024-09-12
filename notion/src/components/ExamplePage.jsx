import EachSection from "./EachSection";
import todo1 from "../assets/images/checklist.png";
import todo2 from "../assets/images/calendarSheet.png";
import todo3 from "../assets/images/bolt.png";
import img1 from "../assets/images/plan-v5.png";
import write1 from "../assets/images/photoOnRectangle.png";
import write2 from "../assets/images/at2.png";
import write3 from "../assets/images/sparklePencil.png";
import img2 from "../assets/images/write-v5.png";
import organize1 from "../assets/images/bookClosed1.png";
import organize2 from "../assets/images/connections.png";
import organize3 from "../assets/images/sparkleBubble.png";
import img3 from "../assets/images/organize-v6.png";
import ai1 from "../assets/images/exclaimationBubble.png";
import ai2 from "../assets/images/pencilTwist.png";
import ai3 from "../assets/images/puzzle.png";
import img4 from "../assets/images/ai-v6.png";

const ExamplePage = () => {
     const sections1 = [
     {
          image: todo1,
          title: "Tasks and to-dos",
          description: "Tackle any project, big or small."
     },
     {
          image: todo2,
          title: "Custom views",
          description: "Visualize work in any format, from calendars to kanban boards."
     },
     {
          image: todo3,
          title: "Automations",
          description: "Put tedious tasks on autopilot."
     }
     ];
     const sections2 = [
     {
          image: write1,
          title: "Building blocks",
          description: "100+ content types to communicate any idea."
     },
     {
          image: write2,
          title: "Collaborative tools",
          description: "Built for teams to share, suggest, and comment."
     },
     {
          image: write3,
          title: "AI-assisted",
          description: "Edit, draft, translate. Ask, and AI will answer."
     }
     ];
     const sections3 = [
     {
          image: organize1,
          title: "Teamspaces",
          description: "Dedicated space for every team and project."
     },
     {
          image: organize2,
          title: "Integrations",
          description: "Connected to all your favorite tools."
     },
     {
          image: organize3,
          title: "Just ask AI",
          description: "Instant answers when you need them."
     }
     ];
     const sections4 = [
     {
          image: ai1,
          title: "Instant answers",
          description: "Ask any question about your team’s docs and projects."
     },
     {
          image: ai2,
          title: "Personalized editor",
          description: "Generate content that’s always relevant."
     },
     {
          image: ai3,
          title: "AI connectors",
          description: "Access info from all your tools, right inside Notion."
     }
     ];

     return (
          <>
          <EachSection
               buttonName="Plan"
               title="Your workflow. Your way."
               description="There’s a lot to keep track of. Notion’s flexible pages allow you to design your ideal workflow and view it by timeline, task, team, or level of doneness."
               linkText="Explore projects"
               sections={sections1}
               imageSrc={img1}
          />
          <EachSection
               buttonName="Write"
               title="Find the right words."
               description="Capture ideas, gather feedback from teammates, and ask AI to add the finishing touches."
               linkText="Explore docs & notes"
               sections={sections2}
               imageSrc={img2}
          />
          <EachSection
               buttonName="Organize"
               title="Remember everything."
               description="No more endless searching for the info you need. Everything you and your team store in Notion is accessible in an instant."
               linkText="Explore knowledge management"
               sections={sections3}
               imageSrc={img3}
          />
          <div className="h-[50vh] flex justify-center items-center">
               <div className="bg-gray p-[60px] w-max text-5xl font-light text-center flex justify-center items-center flex-col -rotate-3 font-serif relative">
                    <div className="absolute -top-8 w-14"><img src="https://www.notion.so/front-static/pages/product/super-duper/pin.png" alt="" /></div>
                    <div>&quot;Your AI everything app.&quot;</div>
                    <h2 className="text-xl font-extrabold">Forbes</h2>
               </div>
          </div>
          <EachSection
               buttonName="Notion AI"
               title="Get a brain boost."
               description="Built right into your workspace, Notion AI is at the ready to brainstorm ideas, summarize, help you write, and find what you’re looking for."
               linkText="Try Notion AI"
               sections={sections4}
               imageSrc={img4}
          />
          </>
     );
};

export default ExamplePage;