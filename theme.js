import React from "react";

const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: "fixed",
        right: 0,
        bottom: 0,
        margin: 16
      }}
    >
      Navigation in mobile apps [{props.index + 1} / {props.slides.length}]
    </div>
  </div>
);

export default {
  // add a custom font
  font:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  css: {
    fontSize: "0.9em"
  },
  // custom colors
  colors: {
    text: "black",
    background: "white",
    link: "#5057f2",
    code: "grey"
  },
  Slide: {
    padding: "80px"
  },
  pre: {
    fontSize: "14px",
    lineHeight: "1.5px"
  },
  inlineCode: {
    color: "blue"
  },
  Provider
};
