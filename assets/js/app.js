function getJSON(url) {
    return new Promise(function (resolve, reject) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", url);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                resolve(JSON.parse(ajax.responseText));
            }
        }
    })
};

getJSON("data/earth-like-results.json")
    .then(function (planetas) {
        planetas.results.forEach(function (planeta) {
            (getJSON(planeta).then(function (datos) {
                crearDatos(datos)
            }))
        })
    })

var crearDatos = function (datos) {

    var nombredatos = datos.pl_name;
    var descubiertodatos = datos.pl_disc;
    var orbitadatos = datos.pl_orbper;
    var contPlanetas = document.getElementById("planetas");

    //crear dinamicamente

    var tarjeta = document.createElement("div");
    tarjeta.className = "col s12 m6";
    var card = document.createElement("div");
    card.className = "card";
    var cardImage = document.createElement("div");
    cardImage.className = "card-image";
    var img = document.createElement("img");
    img.src = "static/img/planeta1.jpg";
    var title = document.createElement("span")
    title.className = "card-title";
    title.innerText = nombredatos;
    var cardContent = document.createElement("div");
    cardContent.className = "card-content";
    var descubierto = document.createElement("h3");
    var year = document.createElement("p");
    year.innerText = descubiertodatos;
    var orbita = document.createElement("h3");

    var perOrbita = document.createElement("p");
    perOrbita.innerText = orbitadatos;


    cardImage.appendChild(img);
    cardImage.appendChild(title);
    cardContent.appendChild(descubierto);
    cardContent.appendChild(year);
    cardContent.appendChild(orbita);
    cardContent.appendChild(perOrbita);


    card.appendChild(cardImage);
    card.appendChild(cardContent);
    tarjeta.appendChild(card);
    console.log(tarjeta);

    contPlanetas.appendChild(tarjeta);

    console.log(tarjeta);

};

/*
var plantilla = '<div class="col s12 m6">'+
                  '<div class="card">'+
                    '<div class="card-image">'+
                      '<img src="static/img/planeta1.jpg">'+
                      '<span class="card-title">__nombre__</span>'+
                    '</div>'+
                    '<div class="card-content">'+
                      '<h3>Descubierto en </h3>'+
                      '<p>__year--</p>'+
                      '<h3>Periodo de Orbita</h3>'+
                      '<p>__orbita__</p>'+
                    '</div>'+
                   '<div class="card-action">'+
                      '<a href="#">This is a link</a>'+
                    '</div>'+
                  '</div>'+
                '</div>';
                
                */
