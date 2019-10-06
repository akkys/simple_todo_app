import React, { Component } from "react";

class ListItems extends Component {
  render() {
    const items = this.props.items;
    const listItems = items.map(item => {
      return (
        <div key={item.key} className="list_item">
          <p>
            <input
              type="text"
              id={item.key}
              value={item.text}
              onChange={e => this.props.setUpdate(e.target.value, item.key)}
            />
            <span>
              <button
                id="delete"
                onClick={() => this.props.deleteItem(item.key)}
              >
                X
              </button>
            </span>
          </p>
        </div>
      );
    });
    return <div>{listItems}</div>;
  }
}

export default ListItems;
