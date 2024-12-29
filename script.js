// script.js
document.getElementById("estraiBtn").addEventListener("click", function() {
    // Funzione per estrarre un numero casuale da 1 a 90
    const numeroEstratto = estraiNumero();
    
    // Aggiornare il numero estratto
    document.getElementById("numero").textContent = numeroEstratto;

    // Aggiungere il numero estratto alla lista dello storico
    aggiungiStorico(numeroEstratto);
});

let storicoNumeri = [];

function estraiNumero() {
    const numero = Math.floor(Math.random() * 90) + 1;
    return numero;
}

function aggiungiStorico(numero) {
    // Aggiungere il numero estratto allo storico
    storicoNumeri.push(numero);

    // Aggiornare la lista visibile
    const storicoList = document.getElementById("storicoList");
    const listItem = document.createElement("li");
    listItem.textContent = numero;
    storicoList.insertBefore(listItem, storicoList.firstChild);  // Aggiungi in cima alla lista

    // Limita lo storico a 10 numeri
    if (storicoNumeri.length > 10) {
        storicoNumeri.shift();  // Rimuove il primo numero della lista se la lunghezza supera 10
        storicoList.removeChild(storicoList.lastChild);  // Rimuove l'ultimo elemento visibile
    }
}
