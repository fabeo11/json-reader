import React, { Component } from "react";
import PostData from "../../json/08002fluxo_21012020153212363_2.json";

class Reader extends Component {
  render() {
    return (
      <div>
        {}
        <h4>{PostData.Placa}</h4>
        <h4>{PostData.Data}</h4>
        <h4>{PostData.Hora}</h4>
        <h4>{PostData.Equipamento}</h4>
        <h4>{PostData.Faixa}</h4>
      </div>
    );
  }
}

export default Reader;
