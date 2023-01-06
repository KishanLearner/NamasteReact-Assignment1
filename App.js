import React from "react";
import ReactDOM from "react-dom/client";



//=================creating nested tags using react.createElement===================

/*
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste Everyone 1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title1",
  },
  "Namaste heading 2"
);
const heading3 = React.createElement(
  "h3",
  {
    id: "title2",
  },
  "Namaste heading 3"
);

const container = React.createElement(
  "div",
  { id: "container",className:"title" },
  heading1,
  heading2,
  heading3
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);


*/

//===============Create the same element using JSX==========================

/*
const ContainerComponent = (
    <div className="title">
     <h1>Heading 1</h1>
     <h2>Heading 2</h2>
     <h3>Heading 2</h3>
    </div>
  );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(ContainerComponent);
*/


//=============Create a functional component of the same with JSX.==================
/*
const HeadingComponent = () => {
return(
  <div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 2</h3>
  </div>
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
*/

//==================Pass attributes into the tag in JSX===================
/*
const HeadingComponent = () => {
  return(
    <div>
      <h1 id="head1">Heading 1</h1>
      <h2 className="bgcolorset">Heading 2</h2>
      <h3 style={{color:"red"}}>Heading 2</h3>
    </div>
  );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<HeadingComponent />);
*/

  //===========Composition of Component(Add a component inside another)=============

  const HeadingComponent = () => {
    return(
      <div>
        <h1 id="head1">Heading 1</h1>
        <h2 className="bgcolorset">Heading 2</h2>
        <h3 style={{color:"red"}}>Heading 2</h3>
      </div>
    );
    }
    const MainComponent =() =>{
      return(
        <div>
          <h1>Component call within a component</h1>
          <HeadingComponent > </HeadingComponent>
        </div>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(<MainComponent />);