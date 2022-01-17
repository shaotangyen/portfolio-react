import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  return (
      <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-5">
        <a target="_blank" href="https://www.linkedin.com/in/betayen/" className='mx-2 footer-link'>
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
        </a>
        <a target="_blank" href="https://github.com/shaotangyen/" className='mx-2 footer-link'>
          <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
        </a>
        <a target="_blank" href="https://www.facebook.com/shaotangyen/" className='mx-2 footer-link'>
          <FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/>
        </a>
      </footer>
  );
}

export default Footer;
