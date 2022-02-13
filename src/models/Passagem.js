class Passagem {
  constructor(placa, data, hora, equipamento, faixa) {
    this.placa = placa;
    this.data = data;
    this.hora = hora;
    this.equipamento = equipamento;
    this.faixa = faixa;
  }

  lerJson() {
    alert("CHEGOU");
  }
}

var passagem = new Passagem();
