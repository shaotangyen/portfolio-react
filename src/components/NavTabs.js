import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand navbar-dark nav-style">
      <div class="container-fluid">
        {/* Logo */}
        <a
          class="navbar-brand logo"
          href="#"
          onClick={() => handlePageChange('About')}>
          Shao <span class="accent-color">Studio</span>
        </a>
        {/* Nav Bar */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
