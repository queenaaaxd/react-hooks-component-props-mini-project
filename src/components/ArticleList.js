import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const lists = posts.map((post) => {
      return <Article title={post.title} date={post.date} preview={post.preview} />;
  });
  return (
    <div>
          <main>{lists}</main>
    </div>
  );
}

export default ArticleList;
