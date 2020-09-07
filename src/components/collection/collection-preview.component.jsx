import React from "react";

import "./collection-preview.scss";

const CollectionPreview = ({ title, item }) => {
  <div className="collection-preview">
    <h1 className="title">{title.toupperCase()}</h1>
    <div className="preview">
      {item.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>;
};

export default CollectionPreview;
