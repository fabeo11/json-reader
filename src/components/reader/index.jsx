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

  render() {
    return (
      <div className="componentTabelaDadosJson">
        <div className="insertDados">
          <h1>leitor json!</h1>
          <h2>É só inserir o caminho do diretório abaixo!</h2>
          <form>
            <label>
              <input type="text" id="boxCaminhoDir" />
            </label>
            <input type="submit" value="Enviar" id="botaoEnviar" onClick=
            {
              (e)=>
              {
                let dir = document.getElementById("boxCaminhoDir");
                console.log(dir);
              }

            }/>
          </form>
        </div>

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
