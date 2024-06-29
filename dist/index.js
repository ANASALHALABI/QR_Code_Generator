"use strict";
window.onload = () => {
    let qrText = document.getElementById("qrText");
    let imgBox = document.getElementById("imgBox");
    if (!qrText || !imgBox) {
        console.error("Required elements not found in the DOM.");
        return;
    }
    document.querySelector("button").onclick = () => {
        generateQrCode(qrText);
    };
};
function generateQrCode(qrText) {
    const qrcodeElement = document.getElementById("qrcode");
    if (!qrcodeElement) {
        console.error("QR code element not found.");
        return;
    }
    qrcodeElement.innerHTML = "";
    if (qrText.value.length > 0) {
        new QRCode(qrcodeElement, {
            text: qrText.value,
            width: 200,
            height: 200,
        });
        qrcodeElement.parentElement?.classList.add("show-img");
    }
    else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
//# sourceMappingURL=index.js.map