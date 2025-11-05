function gerarGaleria(caminho, total) {
  const imagens = [];
  for (let i = 1; i <= total; i++) {
    imagens.push(`${caminho}/${i}.jpg`);
  }
  return imagens;
}

// Defina quantas imagens há em cada pasta:
const galeria = [
  gerarGaleria("img/professor", 8),     //  imagens na pasta professor
  gerarGaleria("img/eletricista", 2),   //  imagens na pasta eletricista
  gerarGaleria("img/diversos", 2)       //  imagens na pasta diversos
];

let indices = [0, 0, 0];

function changePhoto(modalIndex, direction) {
  indices[modalIndex] += direction;
  const total = galeria[modalIndex].length;
  if (indices[modalIndex] < 0) indices[modalIndex] = total - 1;
  if (indices[modalIndex] >= total) indices[modalIndex] = 0;
  document.getElementById(`modal-img-${modalIndex}`).src = galeria[modalIndex][indices[modalIndex]];
}
