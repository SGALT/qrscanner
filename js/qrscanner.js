import QrScanner from './qr-scanner.min.js';

const video = document.querySelector("video");
const form = document.querySelector("form");
const inputId = document.querySelector("#id");
const camQrResult = document.getElementById('cam-qr-result');

const submitQrCode = (label) => {
  form.submit();
}

function setResult(label, result) {
  label.value = result.data;
  submitQrCode();
}

const scanner = new QrScanner(video, result => setResult(inputId, result), {
  highlightScanRegion: true,
  highlightCodeOutline: true,
});

scanner.start()
