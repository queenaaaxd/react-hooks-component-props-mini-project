import React from "react";

function About({ image = "https://via.placeholder.com/215Links", about }) {
  return (
    <div>
      <aside>
        <img src={image} alt="blog logo"></img>
        <p>{about}</p>
      </aside>
    </div>
  );
}

export default About;
