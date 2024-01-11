function funkcija() {
    const gumb = document.getElementById("gumb");
    let racun = parseFloat(document.getElementById("racun").value);
    let napojnica = parseFloat (document.getElementById("napojnica").value);
    let napojnicaPostotak = 1 + (napojnica/100);
    let iznos = (racun * napojnicaPostotak).toFixed(2);
    let baksa = (iznos - racun).toFixed(2);
    document.getElementById("ukupno").innerHTML = "Ukupno: " + iznos;
    document.getElementById("baksa").innerHTML = "Napojnica: " + baksa;
}