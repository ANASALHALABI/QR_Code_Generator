declare var QRCode: any;

window.onload = () => {
    let qrText = document.getElementById("qrText") as HTMLInputElement;
    let imgBox = document.getElementById("imgBox");

    if (!qrText || !imgBox) {
        console.error("Required elements not found in the DOM.");
        return;
    }

    (document.querySelector("button") as HTMLButtonElement).onclick = () => {
        generateQrCode(qrText);
    };
};

function generateQrCode(qrText: HTMLInputElement): void {
    const qrcodeElement = document.getElementById("qrcode");
    
    if (!qrcodeElement) {
        console.error("QR code element not found.");
        return;
    }

    qrcodeElement.innerHTML = ""; // Clear previous QR code

    if (qrText.value.length > 0) {
        new QRCode(qrcodeElement, {
            text: qrText.value,
            width: 200,
            height: 200,
        });
        qrcodeElement.parentElement?.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
