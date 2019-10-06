import React, { Component } from "react";
import ListItems from "./ListItems";

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      textErr: "",
      currentItem: {
        text: "",
        key: ""
      }
    };
  }

  handleInput = e => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  };

  validate = () => {
    let textErr = "";
    if (!this.state.currentItem.text) {
      textErr = "*Warning: Please enter Item in the field*";
    }

    if (textErr) {
      this.setState({ textErr });
      return false;
    }
    return true;
  };

  addItem = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const newItem = this.state.currentItem;
      console.log(newItem);
      if (newItem.text !== "") {
        const newItems = [...this.state.items, newItem];
        this.setState({
          items: newItems,
          textErr: "",
          currentItem: {
            text: "",
            key: ""
          }
        });
      }
    }
  };

  deleteItem = key => {
    const filteredItem = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItem
    });
  };

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({ items: items });
  };

  render() {
    return (
      <div>
        <form className="form-container" onSubmit={this.addItem}>
          <h1 className="app">Todo Application</h1>
          <hr />
          <input
            type="text"
            className="input_text"
            placeholder="Add items..."
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />

          <button id="add-button">Add</button>
          <p className="text_err">{this.state.textErr}</p>
          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </form>
      </div>
    );
  }
}

export default InputTodo;
