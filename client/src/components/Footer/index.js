import React from "react";


const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-dark p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} 
      </div>
    </footer>
  );
};

export default Footer;
