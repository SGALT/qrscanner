import QrScanner from './qr-scanner.min.js';

const video = document.querySelector("video");
const form = document.querySelector("form");
const inputId = document.querySelector("#id");
const camQrResult = document.getElementById('cam-qr-result');

const submitQrCode = (input) => {
  const url = "https://hook.eu1.make.com/6rry6qjjmyeocqrrxp3mseu6hjhygnp2"
  const data = {
    id: input.value
  }
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)  // Convertir les données en chaîne JSON
  })
    .then(response => response.json())  // Si le serveur renvoie du JSON
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  window.location.href = "https://erasmo8088.softr.app/scan-event"
}

function setResult(label, result) {
  label.value = result.data;
  submitQrCode(label);
}

const scanner = new QrScanner(video, result => setResult(inputId, result), {
  highlightScanRegion: true,
  highlightCodeOutline: true,
});

scanner.start()
