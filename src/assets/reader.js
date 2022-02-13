const fs = require("fs").promises;

async function listarArquivosDir(diretorio, arquivos) {
  if (!arquivos) arquivos = [];

  let listaDeArquivos = await fs.readdir(diretorio);
  let fullDir = [];

  for (let k in listaDeArquivos) {
    fullDir = diretorio + listaDeArquivos[k];
    const jsonData = require(fullDir);
    console.log(jsonData);
  }
}

listarArquivosDir("../json/");
