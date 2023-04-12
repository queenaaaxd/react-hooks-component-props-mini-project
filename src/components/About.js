import React from "react";

function About({ image, about }) {
  return (
    <div>
      <aside>
        <img
          src={image}
          alt="blog-logo"
          placeholder="https://via.placeholder.com/215Links"
        ></img>
        <p>{about}</p>
      </aside>
    </div>
  );
}

export default About;
