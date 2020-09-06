import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Dogs",
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
          id: 1,
          size: "large",
          linkUrl: "dogs"
        },
        {
          title: "Fish",
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_960_720.jpg",

          id: 2,
          size: "large",
          linkUrl: "fish"

        },
        {
          title: "Cats",
          imageUrl:
            "https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554_960_720.jpg",
          id: 3,
          size: "large",
          linkUrl: "dogs"

        },
        {
          title: "Birds",
          imageUrl:
            "https://cdn.pixabay.com/photo/2020/06/29/00/03/parrots-5350976_960_720.jpg",
          id: 4,
          linkUrl: "dogs"

        },
        {
          title: "Rabbits",
          imageUrl:
            "https://cdn.pixabay.com/photo/2018/03/29/23/14/rabbit-3273992_960_720.jpg",
          id: 5,
          linkUrl: "dogs"

        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
