

let qrText = document.getElementById("qrText");
let qrImage = document.getElementById("qrImage");
let imgBox = document.getElementById("imgBox");

function generateQR(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + qrText.value;
    imgBox.classList.add("showQr");
}