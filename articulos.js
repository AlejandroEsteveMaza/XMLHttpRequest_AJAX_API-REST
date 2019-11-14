window.onload = function () {

    var divModal = document.createElement("div");
    divModal.id = "myModal";
    divModal.className = "modal";
    var divContenido = document.createElement("div");
    divContenido.className = "modal-content";

    var span = document.createElement("span");
    span.className = "close";
    span.innerHTML = "&times;";
    var p = document.createElement("p");
    p.innerHTML = "texto de ejemplo";
    divContenido.appendChild(span);
    divContenido.appendChild(p);
    divModal.appendChild(divContenido);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(divModal);

};

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
function postJson() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("btnPost");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
   /*  var prod2 = {
        "id": 105,
        "nombre": "HP2 1500L",
        "descripcion": "xxxxxxImpresora Laser",
        "precio": 200
    }; */

    /* var http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3000/articulos', true);
    //http.setRequestHeader("Content-type", "application/json");
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(JSON.stringify(prod2));
    http.addEventListener('readystatechange', function () {
        if (http.readyState === 4 && http.status === 200) {
            if (parseInt(http.responseText) === 1) alert("Todo ha ido bien");
            else alert("Ha habido un error al añadir el producto");
        }
    }); */
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
    trCabecera.className = "cabecera";
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
        /* for (var key in articulo) {
            //console.log(key);

            var tdname = document.createElement("td");
            texto = document.createTextNode(articulo[key]);
            tdname.appendChild(texto);
            tr.appendChild(tdname);
        } */

        for (let i = 0; i < 4; i++) {
            const element = Object.keys(articulo)[i];
            console.log(articulo[element]);
            var tdname = document.createElement("td");

            //console.log(texto.textContent);
            if (articulo[element] === undefined) {
                texto = document.createTextNode(" ");
                tdname.appendChild(texto);
            } else {
                texto = document.createTextNode(articulo[element]);
                tdname.appendChild(texto);

            }
            tdname.appendChild(texto);
            tr.appendChild(tdname);
        }
        var tdMod = document.createElement("td");
        var botonModifica = document.createElement("button");
        botonModifica.innerHTML = "Modifica";
        //botonModifica.setAttribute('onclick', "modifica()");
        botonModifica.id = "btnMod";
        tdMod.appendChild(botonModifica);
        tr.appendChild(tdMod);

        var tdDel = document.createElement("td");
        var botonElimina = document.createElement("button");
        botonElimina.innerHTML = "Elimina";
        botonElimina.setAttribute('onclick', "elimina()");
        tdDel.appendChild(botonElimina);
        tr.appendChild(tdDel);

        tabla.appendChild(tr);


        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        //var btn = document.getElementById("btnMod");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        botonModifica.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });


    document.getElementById("articulos").appendChild(tabla);
}
function modifica() {


    /* // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("btnMod");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    } */
}
function elimina() {
    console.log("bbbbb world!");
} 