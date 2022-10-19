import React from 'react';
import Projects from './Projects';

function Portfolio(props) {
  const { currentCategory } = props;
  console.log("this is category", props)
  return (
    <section>
      <h1 data-testid="h1tag">Projects</h1>
      <p>{currentCategory.description}</p>
      <Projects category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;
