import React, { Component } from "react";
import "./styles.css";

class Reader extends React.Component {
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

  inputCaminhoDir = (e)=> {
    if(e.keyCode === 13){
      console.log(e.target.value);
    }
    
  }

  render() {
    return (
      <div className="tabelaDadosJson">
        <h1>Lista dos dados</h1>
        <form>
          <label>
            <input type="text" name="caminhoDir" />
          </label>
          <input type="submit" value="Enviar" />
        </form>
        <table border="1">
          <thead>
            <tr>
              <th>PLACA</th>
              <th>DATA</th>
              <th>HORA</th>
              <th>EQUIPAMENTO</th>
              <th>FAIXA</th>
            </tr>
          </thead>
        </table>

        {this.state.dados.map((item) => (
          <table border="1">
            <tr>
              <td>{item.placa}</td>
              <td>{item.data.toString().split("T")[0]}</td>
              <td>{item.hora}</td>
              <td>{item.equipamento}</td>
              <td>{item.faixa}</td>
            </tr>
          </table>
        ))}
      </div>
    );
  }
}

export default Reader;
