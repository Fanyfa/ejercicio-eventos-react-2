import React from 'react';

class Destiny extends React.Component {
    changeDestiny(event) {
        const newDestiny = event.target.value;
            alert(`Tu destino es ${newDestiny}`);
    }

  render() {
    return (
      <select onChange={this.changeDestiny}>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Madri">Madrid</option>
        <option value="Tokio">Tokio</option>
        <option value="Madrid">Madrid</option>
        <option value="Sidney">Sidney</option>
      </select>
     );
    }
  }

export default Destiny;