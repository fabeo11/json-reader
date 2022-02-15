import React, { Component } from "react";
import PostData from "../../json/08002fluxo_21012020153212363_2.json";

class Reader extends Component {
  state = {
    dados: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/passagems")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          dados: res,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Lista dos dados</h1>
        {this.state.dados.map((item) => (
          <table border="1">
            <tr>
              <th>PLACA</th>
              <th>DATA</th>
              <th>HORA</th>
              <th>EQUIPAMENTO</th>
              <th>FAIXA</th>
            </tr>
            <tr>
              <td>{item.placa}</td>
              <td>{item.data}</td>
              <td>{item.hora}</td>
              <td>{item.equipamento}</td>
              <td>{item.faixa}</td>
            </tr>
          </table>
        ))}

        <hr></hr>
      </div>
    );
  }
}

export default Reader;
