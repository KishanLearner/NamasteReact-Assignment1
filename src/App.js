import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";


const ApplayoutComponent= () =>{
  return(
    <>
    <HeaderComponent />
    <BodyComponent  />
    <FooterComponent />
    {
      /**
       * Header
       *  - Logo
       *  - List items [Nav bar]
       *  - cart
       * Body
       *  - search bar
       *  - Resturant List
       *    - Resturant Card
       *       - Image
       *       - Name
       *       - Rating
       *       - Cusins
       * 
       * Footer
       *  - links
       *  - copy right
       * 
       */

      
    }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ApplayoutComponent />);



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
    */

    // Create a header Component from scratch using Functional  Componenet with JSX. 

    /*
    const LogoComponent = () => {
      return (
        <div id="logo">
        <img  alt="companylogo" src={require("./assets/img/logo.png")} className="logo"/>
        </div>
      );
    };

    const SearchComponent = () => {
      return (
        <div id="search">
        <input type='text'  className='search' placeholder="search anything" />
        </div>
      );
    };

    const UsericonComponent = () => {
      return (
        <div id="icon">
          <svg className="icon" viewBox="0 0 20 20">
                  <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                </svg>
        </div>
      );
    };

    const NavheaderComponent = () => {
      return (
        <div className="header">
          <LogoComponent />
          <SearchComponent />
          <UsericonComponent/>
        </div>
      );
    };
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(header);
    root.render(<NavheaderComponent />);
    */
