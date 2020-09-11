import React from "react";
import Card from "../card/card.component";
import "./blog-item.styles.scss";

const BlogItem = ({ title }) => (
  <div className="blog-item">
    <Card title="Dog food" />
    <Card title="Cat food" />
    <Card title="Fish food" />
  </div>
);

export default BlogItem;
