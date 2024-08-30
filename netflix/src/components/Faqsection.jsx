import EachFaq from "./EachFaq"


const Faqsection = () => {
     const questions = [
          {
               id: 1,
               question: "What is Netflix?",
               answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There&apos;s always something new to discover and new TV shows and movies are added every week!",
          },
          {
               id: 2,
               question: "How much does Netflix cost?",
               answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,200 to ₦7,000 a month. No extra costs, no contracts.",
          },
          {
               id: 3,
               question: "Where can I watch?",
               answer: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.",
          },
          {
               id: 4,
               question: "How do I cancel?",
               answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
          },
          {
               id: 5,
               question: "What can I watch on Netflix?",
               answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
          },
          {
               id: 6,
               question: "Is Netflix good for kids?",
               answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
          },
     ]
     return (
     <>
          <div className="bg-black text-white py-10">
               <div className="container space-y-5">
                    <h2 className="font-bold text-2xl">Frequently Asked Questions</h2>
                    <div className="space-y-2">
                         {
                              questions.map((faq) => (
                                   <EachFaq key={faq.id} question={faq.question} answer={faq.answer} />                                   
                              ))
                         }
                    </div>
               </div>
          </div>
     </>
     )
}

export default Faqsection
