'use client';

import { useState } from "react";

const Contact = () => {

  const[fullname, setFullName] = useState("")
    
  return (
    <form className="flex w-[60vw] my-20 p-8 rounded-md dark:bg-light bg-dark dark:text-dark text-light flex-col mt-10" action="">
      <div className="flex flex-col">
        <label className="text-lg" htmlFor="fullname">Full Name</label>
        <input className="rounded-md px-2 bg-gray-600 dark:text-light text-light" type="text" id="fullname" placeholder="Your Full Name" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input className="rounded-md px-2 bg-gray-600 dark:text-light text-light" type="email" id="email" placeholder="abc@gmail.com" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea className="rounded-md bg-gray-600 p-2 dark:text-light text-light" id="message" cols="30" rows="10" placeholder="Type your message here..."></textarea>
      </div>

      <button className="mt-2 bg-light dark:bg-dark dark:hover:bg-light hover:bg-dark hover:dark:text-dark duration-500 dark:text-light text-dark rounded-md p-4" type="submit">Submit</button>
    </form>
  );
};

export default Contact;
