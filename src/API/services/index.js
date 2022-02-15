(async () => {
  const database = require("./db");
  const Passagem = require("../models/passagem");
  const fs = require("fs").promises;
  var cors = require("cors");
  const express = require("express");
  const api = express();

  await database.sync();

  async function listarArquivosDir(diretorio, arquivos) {
    if (!arquivos) arquivos = [];

    let listaDeArquivos = await fs.readdir(diretorio);
    let fullDir = [];

    for (let k in listaDeArquivos) {
      fullDir = diretorio + listaDeArquivos[k];
      const jsonData = require(fullDir);

      const novaPassagem = Passagem.create({
        placa: jsonData.Placa,
        data: jsonData.Data,
        hora: jsonData.Hora,
        equipamento: jsonData.Equipamento,
        faixa: jsonData.Faixa,
      });

      console.log(jsonData);
    }
  }

  const routes = require("./routes");
  api.use(cors());
  api.use(express.json());
  api.use(routes);

  api.listen(3001);

  listarArquivosDir("../../json/");
})();
