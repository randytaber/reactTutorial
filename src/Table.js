import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.charDataOnTable.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacterOnTable(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterDataFromApp, removeCharacterFromApp } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody
          charDataOnTable={characterDataFromApp}
          removeCharacterOnTable={removeCharacterFromApp}
        />
      </table>
    );
  }
}

export default Table;
