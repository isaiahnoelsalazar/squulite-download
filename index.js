fetch("https://isaiahnoelsalazar.github.io/squulite-download/SQuuLite.apk")
.then(response => {
    blob = response.blob();
    return blob;
})
.then(blob => {
    document.getElementById("filesize").textContent = (blob.size / 1024 / 1024).toFixed(2) + " MB";
});