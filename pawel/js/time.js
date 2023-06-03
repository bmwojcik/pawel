function initTime() {
    var datetime = new Date().toLocaleTimeString();
    document.getElementById("time").textContent = datetime;
}