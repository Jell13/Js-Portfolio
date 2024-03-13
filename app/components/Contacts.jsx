'use client';

import { useState } from "react";

const Contact = () => {

  const[fullname, setFullName] = useState("")
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");
    
  return (
    <form className="flex w-[60vw] my-20 p-8 rounded-md dark:bg-light bg-dark dark:text-dark text-light flex-col mt-10" action="">
      <div className="flex flex-col">
        <label className="text-lg" htmlFor="fullname">Full Name</label>
        <input onChange={(e) => setFullName(e.target.value)} value={fullname} className="rounded-md px-2 bg-gray-200 dark:text-light text-light" type="text" id="fullname" placeholder="Your Full Name" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} className="rounded-md px-2 bg-gray-200 dark:text-light text-light" type="email" id="email" placeholder="abc@gmail.com" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="rounded-md bg-gray-200 p-2 dark:text-light text-light" id="message" cols="30" rows="10" placeholder="Type your message here..."></textarea>
      </div>

      <button className="mt-2 bg-light dark:bg-dark dark:hover:bg-light hover:bg-dark hover:dark:text-dark duration-500 dark:text-light text-dark rounded-md p-4" type="submit">Submit</button>
    </form>
  );
};

export default Contact;
