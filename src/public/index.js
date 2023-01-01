const containerQR = document.getElementById('containerQR');
const form = document.getElementById('form');


const QR = new QRCode(containerQR);

QR.makeCode('http://github.com/glespinola');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  QR.makeCode(form.inputQr.value)
})