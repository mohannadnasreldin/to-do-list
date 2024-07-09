import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-black text-gray-800 dark:text-white text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} <a href="https://mohannadnasreldin.vercel.app" className="" target="_blank" rel="noopener noreferrer">Mohannad Nasreldin</a>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
