import React from "react";
import "./App.scss";
import { Login, Register, Admin } from "./components/login/index";
// import { BrowseRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
      // items: [],
      // isLoaded: false,

    };

   
  } 

   componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  // }

  // componentDidMount() {
  //   //Add .right by default
  //   // this.rightSide.classList.add("right");
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //    .then(res => res.json())
  //    .then(json => {
  //       this.setState({
  //         isLoaded: true,
  //         items:json,
  //       })
  //    });
  // }


  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "UserAdmin" : " UserLogin";
    const currentActive = isLogginActive ? "login" : "admin";

    // var{isLoaded, items } = this.state;


    // if(!isLoaded){
    //   return <div>Loading..</div>;
    // }

    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Admin containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      {/*  <div className="container">
          <ul>
             {items.map(item =>( 
                 <li key={item.UserId}>
                   Name: {item.name} | Title: {item.title} | Body :  {item.body}
                 </li>
              ))}
          </ul>

          Data has been loaded
          </div>*/}
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
