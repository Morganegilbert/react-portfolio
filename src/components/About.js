import React from 'react';
// import coverImage from '../assets/cover/cover-image.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
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
