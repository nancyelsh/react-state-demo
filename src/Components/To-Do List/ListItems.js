import React, { Component } from "react";

// Use of `props`

export default class ListItems extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* Use this.props. */}
          {(item) => <li key={item.id}>{item.text}</li>}
        </ul>
      </div>
    );
  }
}
