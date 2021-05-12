import React from "react";
import "./style.scss";
import MenuItem from "../MenuItem";

class Directory extends React.Component {
  state = {
    items: [
      {
        title: "Hats",
        imageUrl:
          "https://images.unsplash.com/photo-1528219089976-22adb38bffa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
      },
      {
        title: "Sneakers",
        imageUrl:
          "https://images.unsplash.com/photo-1609631349329-4955dc752df7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80",
      },
      {
        title: "Jackets",
        imageUrl:
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      },
      {
        title: "Womens",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
        isLarge: true,
      },
      {
        title: "Mens",
        imageUrl:
          "https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        isLarge: true,
      },
    ],
  };

  render() {
    return (
      <div className="directory">
        {this.state.items.map(({ title, ...otherProps }) => {
          return <MenuItem key={title} title={title} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
