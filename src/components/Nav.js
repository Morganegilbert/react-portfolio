import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav( currentPage, handlePageChange ) {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <ul className="flex-row">
        <li className="mx-2">
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
        <li className="mx-2">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#blog"
            onClick={() => handlePageChange('Blog')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
          >
            Blog
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );

  // const {
  //   categories = [],
  //   setCurrentCategory,
  //   contactSelected,
  //   currentCategory,
  //   setContactSelected,
  // } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  // return (
  //   <header className="flex-row px-1">
  //     <h2>
  //       <a data-testid="link" href="/">
  //         <span role="img" aria-label="camera"> 📸</span> Oh Snap!
  //       </a>
  //     </h2>
  //     <nav>
  //       <ul className="flex-row">
  //         <li className="mx-2">
  //           <a data-testid="about" href=" " onClick={() => setContactSelected(false)}>
  //             About me
  //           </a>
  //         </li>
  //         <li className={`mx-2 ${contactSelected && 'navActive'}`}>
  //           <span onClick={() => setContactSelected(true)}>Contact</span>
  //         </li>
  //         {categories.map((category) => (
  //           <li
  //             className={`mx-1 ${
  //               currentCategory.name === category.name && !contactSelected && 'navActive'
  //               }`}
  //             key={category.name}
  //           >
  //             <span
  //               onClick={() => {
  //                 setCurrentCategory(category);
  //                 setContactSelected(false);
  //               }}
  //             >
  //               {capitalizeFirstLetter(category.name)}
  //             </span>
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   </header>
  // );
}

export default Nav;
