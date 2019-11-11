/* window.onload = function() {
    getJson()
} */;

function getJson() {
    //Obtenemos los articulos en texto
    var http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3000/articulos', true);
    http.send();
    http.addEventListener('readystatechange', function () {
        if (http.readyState === 4 && http.status === 200) {

            pintaTabla(JSON.parse(http.responseText));
        }
    });

}

function modifica() {
    console.log="asdasd";
}
function elimina() {
    console.log="aaaaaa";
}


function pintaTabla(articulos) {
    //Vaciamos la tabla de articulos
    var element = document.getElementById("articulos");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }


    //Creamos la tabla de articulos
    var tabla = document.createElement("table");

   
    //Cabecera tabla
    var trCabecera = document.createElement("tr");
    var cabeceraElements = ["id", "Nombre", "Descripcion", "Precio", "Modificar", "Eliminar"];
    cabeceraElements.forEach(element => {

        var tdname = document.createElement("th");
        texto = document.createTextNode(element);
        tdname.appendChild(texto);
        trCabecera.appendChild(tdname);
    });
    tabla.appendChild(trCabecera);

    //Contenido tabla
    //console.log(articulos);
    articulos.forEach(articulo => {
        var tr = document.createElement("tr");
        for (var key in articulo) {
            //console.log(key);
            
            var tdname = document.createElement("td");
            texto = document.createTextNode(articulo[key]);
            tdname.appendChild(texto);
            tr.appendChild(tdname);
        }
        var td = document.createElement("td");
        var boton = document.createElement("button");
        boton.innerHTML = "Modifica";
        boton.setAttribute("onclick",modifica());
        td.appendChild(boton);
        tr.appendChild(td);

        var td = document.createElement("td");
        var boton = document.createElement("button");
        boton.innerHTML = "Elimina";
        boton.setAttribute("onclick",elimina());
        td.appendChild(boton);
        tr.appendChild(td);

        tabla.appendChild(tr);
    });
   

    document.getElementById("articulos").appendChild(tabla);
}
