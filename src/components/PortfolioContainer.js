import React, { useState } from 'react';
import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import ContactForm from './Contact';
import Home from './Home';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [categories] = useState([
    {
      name: 'projects',
      description: 'Projects created'
    }
  ]);

  const [currentCategory] = useState(categories[0]);

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio currentCategory={currentCategory}/>;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    console.log("contact form", ContactForm);
    return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <footer>
        This is a footer
      </footer>
    </div>
  );
}
