import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const lists = posts.map((post) => (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
  ));
  return (
    <div>
      <main>{lists}</main>
    </div>
  );
}

export default ArticleList;
