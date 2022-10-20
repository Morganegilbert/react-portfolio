import React from 'react';
import me from '../assets/images/me/photo-me.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img
            src={me}
            alt=""
            className="img-thumbnail mx-1"
      />
      <div className="my-2">
        <p>
        Morgan Gilbert is an Environmental Scientist in the Environmental
        Consulting practice. Experience includes; GIS Mapping, Stream and Wetland Delineation, 
        SAM and WAM Assessments, T&E Habitat Assessments, Phase I and II Environmental 
        Site Assessments, and 401/404 Permitting.
        </p>
      </div>
    </section>
  );
}

export default About;
