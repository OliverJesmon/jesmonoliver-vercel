import React from 'react';

function Contact() {
  const Thank = (event) => {
    event.preventDefault();  
    alert('Thank you for your message! I will get back to you soon.');
    event.target.submit(); 
  };

  return (
    <div id="contact" className="grid grid-col-1 p-5 justify-center bg-orange-300">
      <h1 className="text-center text-2xl text-white mx-1">Get in Touch</h1>
      
      <form 
        className="grid item h-100 w-80 mt-4 rounded relative p-4 bg-white space-x-1 space-y-4 justify-center"
        action="https://formspree.io/f/xlddodda" 
        method="POST"
        onSubmit={Thank} 
      >
        <label htmlFor="email" className="text-black">E-mail</label>
        <input 
          type="email" 
          name="E-mail" 
          id="email" 
          className="border hover:border-yellow-400" 
          required
        />

        <label htmlFor="subject" className="text-black">Subject</label>
        <input 
          type="text" 
          name="Subject" 
          id="subject" 
          className="border hover:border-yellow-400" 
        />

        <label htmlFor="message" className="text-black">Body</label>
        <textarea 
          className="border hover:border-yellow-400" 
          name="Message" 
          id="message" 
          required
        />

        <input 
          type="submit" 
          className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded text-white"
          value="Send Message" 
        />
      </form>
    </div>
  );
}

export default Contact;
