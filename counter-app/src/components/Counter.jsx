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

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  render() {
    return;
    <div>
      {this.state.tags.length === 0 && "Please add some tags!"}
      {this.renderTags()}
    </div>;
  }
}

export default Counter;
