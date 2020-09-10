import React from "react";

import "./blog-item.styles.scss";

const BlogItem = ({ title }) => (
  <div>
    <h1>Blog Title{title}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis
      voluptates sint vero dolorem officia, asperiores corporis distinctio
      facilis, tenetur quisquam, blanditiis nemo labore autem nesciunt. Deleniti
      tempora maiores minus.
    </p>
  </div>
);

export default BlogItem;
