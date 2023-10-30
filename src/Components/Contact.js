import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    console.log("useEffect in contact");
    const timer = setInterval(() => {
      console.log("setInterval called");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Contact page unMount");
    };
  });
  return <div>Contact</div>;
};

export default Contact;
