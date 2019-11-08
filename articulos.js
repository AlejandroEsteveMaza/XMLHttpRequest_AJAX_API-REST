function getJson() {
    var articulos = null;

    //Vaciamos la tabla de articulos
    var element = document.getElementById("articulos");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    //Obtenemos los articulos en texto
    var http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3000/articulos', true);
    http.send();
    http.addEventListener('readystatechange', function () {
        if (http.readyState === 4 && http.status === 200) {
            articulos = JSON.parse(http.responseText); // prod = [{"id": “valor id”, "nombre":"nombre del articulo"..... },{},{}]					
            /* console.log(prods);
            console.log(prods.length); 
            articulos = prods; */
        }
    });

    //Creamos la tabla de articulos
    var tabla = document.createElement("table");

    var trCabecera = document.createElement("tr");
    //Cabecera tabla
    var cabeceraElements = ["id", "Nombre", "Descripcion", "Precio"];
    cabeceraElements.forEach(element => {

        var tdname = document.createElement("th");
        texto = document.createTextNode(element);
        tdname.appendChild(texto);
        trCabecera.appendChild(tdname);
    });
    tabla.appendChild(trCabecera);

    //Contenido tabla
   console.log(articulos);
    articulos.forEach(element => {
        var tr = document.createElement("tr");
        var tdname = document.createElement("td");
        texto = document.createTextNode(element[descripcion]);
        tdname.appendChild(texto);
        tr.appendChild(tdname);
    });
    tabla.appendChild(trCabecera);

    document.getElementById("articulos").appendChild(tabla);
}