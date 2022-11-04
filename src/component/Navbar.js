import React from "react";


function Navbar({currentPage, handlePageChange}) {
    return (
        <div>
           <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#MyWork"
          onClick={() => handlePageChange('MyWork')}
          // Check to see if the currentPage is `MyWork`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'MyWork' ? 'nav-link active' : 'nav-link'}
        >
          My Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#ContactMe"
          onClick={() => handlePageChange('ContactMe')}
          // Check to see if the currentPage is `ContactMe`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `ContactMe`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>


        </div>
    );
}

export default Navbar;


