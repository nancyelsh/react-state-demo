import React, { Component } from "react";
import ListItems from "./ListItems";

// Use of `state`

export default class ToDoList extends Component {
  constructor(props) {
    super(props); // Use of super()

    // State
    // Define state

    // Event Handler Functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // `this` must be bound so that those methods
    // correctly update the overall component state
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) return; // ==
    const newItem = {
      id: new Date(),
      // Complete
    };

    // Update state properly on submit
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <p>New Todo</p>
        <form id="" onSubmit={this.handleSubmit}>
          <input
            id=""
            name=""
            placeholder="Add Task"
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button id="" type="submit">
            Add
          </button>
        </form>
        {/* Pass props */}
        <ListItems />
      </div>
    );
  }
}
