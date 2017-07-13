function getJSON(url){
        return new Promise(function(resolve,reject){
          var ajax = new XMLHttpRequest();
          ajax.open("GET",url);
          ajax.send();
          ajax.onreadystatechange = function(){
            if(ajax.readyState == 4){
              resolve(JSON.parse(ajax.responseText));
            }
          }
        })
      };

getJSON("data/earth-like-results.json")
.then(function(planetas){
    planetas.results.forEach(function(planeta){
    (getJSON(planeta).then(function(datos){
        console.log(datos)
    }))
    })
})
.then(function(resultado){
    console.log(resultado)
});


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