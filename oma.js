// Haetaan JSON dataa
fetch('https://run.mocky.io/v3/bbadbd3d-3fc3-49fd-9611-27b4cec5b1e5')
.then(function(response) {
    return response.json();
})
.then(function(responseJson) {
    kerro(responseJson);
})
.catch(function(error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
});

function kerro(data) {
    var teksti = "";
    teksti += "<h1>" + data.otsikko + "</h1>";
    teksti += "<p>" + data.kuvaus + "</p>";
    teksti += "<img src='" + data.kuva + "' alt='Kuva' width='300'/>";
    teksti += "<h2>" + data.opintojaksonimi + " (" + data.tunnus + "), " + data.opintopisteet + " op</h2>";
    
    teksti += "<h3>Sisältö</h3><ul>";
    for (var i in data.sisalto) {
        teksti += "<li>" + data.sisalto[i] + "</li>";
    }
    teksti += "</ul>";

    teksti += "<h3>Tekniikat</h3><ul>";
    for (var j in data.tekniikat) {
        teksti += "<li><a href='" + data.tekniikat[j].linkki + "'>" + data.tekniikat[j].aihe + "</a></li>";
    } 
    teksti += "</ul>";
    
    document.getElementById("vastaus").innerHTML = teksti;
}

// Haetaan toinen JSON data
fetch('https://run.mocky.io/v3/878478cc-3897-4ac2-949a-109562add23b')
.then(function(response) {
    return response.json();
})
.then(function(responseJson) {
    kerroToteutus(responseJson);
})
.catch(function(error) {
    document.getElementById("toteutusVastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
});

function kerroToteutus(data) {
    var teksti = "";
    teksti += "<h1>" + data.toteutuksenNimi + "</h1>";
    teksti += "<p>Osallistujien lukumäärä: " + data.osallistujienLukumaara + "</p>";
    
    teksti += "<h3>Osallistujat:</h3><ul>";
    for (var i in data.osallistujat) {
        teksti += "<li>" + data.osallistujat[i] + "</li>";
    }
    teksti += "</ul>";
    
    teksti += "<p>Alkamisaika: " + new Date(data.alkamisAika).toLocaleString() + "</p>";
    teksti += "<p>Loppumisaika: " + new Date(data.loppumisAika).toLocaleString() + "</p>";
    teksti += "<p>Kesto: " + data.kestoViikoina + " viikkoa</p>";
    teksti += "<img src='" + data.kuva + "' alt='Kuva' width='300'/>";

    document.getElementById("toteutusVastaus").innerHTML = teksti;

}
