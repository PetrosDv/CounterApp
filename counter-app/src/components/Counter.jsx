import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
    //tags: ["tag1", "tag2", "tag3"] // I will use the map method to render list of items
    //imageUrl: "https://picsum.photos/199" // <img src={this.state.imageUrl} alt="" />
  };

  //error function syntax: function = (..) => {...}
  handleIncrement = product => {
    console.log(product);
    //this.state.count++; <-- this is not working in React, instead we use below
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    //it returns a new react element - div - which has 2 children (span & button)
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onclick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
