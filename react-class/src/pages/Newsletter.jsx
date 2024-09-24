
const Newsletter = () => {
     return (
     <>
          <div className="grid grid-cols-2 w-[80%] mx-auto bg-green-800">
               <div>
                    <h1>Get in Touch</h1>
                    <p>Have questions or need more information? Our team is ready to assist you. Reach out to us via the form below or contact us directly using the provided information. Your security is our priority.</p>
               </div>
               <div>
                    <form action="">
                         <div className="mb-2">
                              <label htmlFor="name">Name:</label>
                              <input type="text" id="name" name="name" />
                         </div>
                         <div className="mb-2">
                              <label htmlFor="email">Email</label>
                              <input type="email" id="email" name="email" />
                         </div>
                         <div className="mb-2">
                              <label htmlFor="message">Message</label>
                              <textarea name="message" id="message"></textarea>
                         </div>
                    </form>
               </div>
          </div>
     </>
     )
}

export default Newsletter
