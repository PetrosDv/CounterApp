import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"] // I will use the map method to render list of items
    //imageUrl: "https://picsum.photos/199" // <img src={this.state.imageUrl} alt="" />
  };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}> {tag} </li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
