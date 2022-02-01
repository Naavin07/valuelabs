import React from "react";


export class Post extends React.Component {
  constructor(props) {
    super(props);
      items: [],
      isLoaded: false,
  }

   componentDidMount() {
    //Add .right by default
    // this.rightSide.classList.add("right");
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(json => {
        this.setState({
          isLoaded: true,
          items:json,
        })
     });
  }


  render() {
     var{isLoaded, items } = this.state;


    if(!isLoaded){
      return <div>Loading..</div>;
    }

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">

          <ul>
             {items.map(item =>( 
                 <li key={item.UserId}>
                   Name: {item.name} | Title: {item.title} | Body :  {item.body}
                 </li>
              ))}
          </ul>

          Data has been loaded

         
        </div>
        <div className="footer">
         
        </div>
      </div>
    );
  }
}
