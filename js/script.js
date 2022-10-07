// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2 (BONUS):

// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

// dati

const kmPrice = 0.21

const userKminput = document.getElementById("user-km");

const userEtainput = document.getElementById("user-eta");

const userButtoninput = document.getElementById("btn"); 

userButtoninput.addEventListener('click', function(){
    // prendo i valori dell risposte km e eta 

    const userKm = parseInt(userKminput.value) ;
    console.log(userKminput);

    const userEta =parseInt(userEtainput.value) ;
    console.log(userEtainput);

    // calcolo i primi valore senza sconto
    const price = userKm * kmPrice
    console.log(price,typeof price)


    if (userEtainput < 18){
        price = price * 0.8
    } else if (userEtainput => 65 ){
        price = price * 06
    } else{
        price = price
    }
    console.log(price)
    
    document.getElementById("result").innerHTML = 
    `Questo e il prezzo: ${price}`
})

