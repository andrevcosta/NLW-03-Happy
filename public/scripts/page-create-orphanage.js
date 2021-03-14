// create map
// const map = L.map('mapid').setView([-27.222633, -49.6455874], 15); Sulista
const map = L.map('mapid').setView([-1.4499331, -48.4832628], 15); // belem

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector('#images');
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload');
  // realizar o clone da última imagem adicionada
  const newFieldVontainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldVontainer.children[0];

  if (input.value == '') {
    return;
  }
  // limpar o campo antes de adicionar o container de imagens
  input.value = '';
  // adicionar o clone ao container de #images
  container.appendChild(newFieldVontainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length < 2) {
    // limpar o valor do campo
    span.parentNode.children[0].value = '';
    return;
  }

  // deletar o campo
  span.parentNode.remove();
}

// troca de sim ou não para atendimento nos finais de semana
function toggleSelect(event) {
  // retirar a class .active (dos botões)
  document
    .querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));
  // colocar a classe .activee no botão clicado
  const button = event.currentTarget;
  button.classList.add('active');

  //att o input hidden com o valor selecinado
  const input = document.querySelector('[name="open_on_weekends"]');
  // verificar se é sim ou não
  input.value = button.dataset.value;
}

function validate(event) {
  const lat = document.querySelector('#lat');
  const lng = document.querySelector('#lng');

  if (lat.value == '' || lng.value == '') {
    event.preventDefault();
    alert('Selecione a localização do orfanato no mapa!');
  }
}
