window.onload = function () {
    /*  //Creación modal
     var divModal = document.createElement("div");
     divModal.id = "myModal";
     divModal.className = "modal";
     var divContenido = document.createElement("div");
     divContenido.className = "modal-content";
 
     var span = document.createElement("span");
     span.className = "close";
     span.innerHTML = "&times;";
     divContenido.appendChild(span);
     
     //Formulario Modal
     var inputElements = ["id", "Nombre", "Descripcion", "Precio"];
     inputElements.forEach(element => {
         var input = this.document.createElement("input");
         input.type = "text";
         input.id = element;
         input.placeholder = "Introduce " + element + "...";
         divContenido.appendChild(input);
     });
     //Boton Formulario Modal
     var inputBtn = document.createElement("input");
     inputBtn.type = "submit";
     inputBtn.value= "Aceptar";
     inputBtn.addEventListener("click", aceptarFormModal);
     divContenido.appendChild(inputBtn);
 
     divModal.appendChild(divContenido);
     var body = document.getElementsByTagName('body')[0];
     body.appendChild(divModal); */

    //Carga ventana modal para el boton POST
    //cargaModal(document.getElementById("btnPost"));
};

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
            //console.log(articulo[element]);
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
        botonModifica.setAttribute('onclick', "cargaModal(this.value)");
        botonModifica.id = "btnMod-" + articulo["id"];
        botonModifica.value = articulo["id"];
        tdMod.appendChild(botonModifica);
        tr.appendChild(tdMod);

        var tdDel = document.createElement("td");
        var botonElimina = document.createElement("button");
        botonElimina.innerHTML = "Elimina";
        botonElimina.setAttribute('onclick', "elimina()");
        tdDel.appendChild(botonElimina);
        tr.appendChild(tdDel);

        tabla.appendChild(tr);

    });


    document.getElementById("articulos").appendChild(tabla);
}

function cargaModal(id) {
    //Si ya existe el modal no lo vuelve a crear
    if (document.getElementById("myModal") == null) {


        //Creación modal
        var divModal = document.createElement("div");
        divModal.id = "myModal";
        divModal.className = "modal";
        var divContenido = document.createElement("div");
        divContenido.className = "modal-content";
        divContenido.id = "modal-id";

        var span = document.createElement("span");
        span.className = "close";
        span.innerHTML = "&times;";
        divContenido.appendChild(span);

        //Formulario Modal
        var inputElements = ["descripcion", "id", "nombre", "precio"];
        inputElements.forEach(element => {
            var input = this.document.createElement("input");
            input.type = "text";
            input.id = element;
            input.placeholder = "Introduce " + element + "...";
            divContenido.appendChild(input);
        });
        //Boton Formulario Modal
        var inputBtn = document.createElement("input");
        inputBtn.type = "submit";
        inputBtn.value = "Aceptar";
        inputBtn.id = "btnModal";
        inputBtn.addEventListener("click", aceptarFormModal);
        divContenido.appendChild(inputBtn);

        divModal.appendChild(divContenido);
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(divModal);
    }

    //console.log(id);

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    //var btn = document.getElementById("btnMod");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    modal.style.display = "block";


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

    //Patch o post
    //Asignamos la accion que hará el botón del formulario
    var btnModal = document.getElementById("btnModal");

    if (id) {
        btnModal.setAttribute('action', 'PUT');
        getArticuloJson(id);
    } else {
        btnModal.setAttribute('action', 'POST');
        postJson();
    }

}



function elimina() {
    //console.log("bbbbb world!");
}






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


function modifica(articulo) {
    console.log(articulo);


    //Obtenemos los campos del formulario
    var matches = [];
    var searchEles = document.getElementById("modal-id").children;
    for (var i = 0; i < searchEles.length; i++) {
        if (searchEles[i].type == 'text') {
            matches.push(searchEles[i]);
        }
    }
    console.log(matches);
    //Cargamos los datos en el formulario
    matches.forEach(element => {
        document.getElementById(element.id).value = articulo[element.id];
    });


}

function getArticuloJson(id) {
    //Obtenemos los articulos en texto
    var http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3000/articulos/' + id, true);
    http.send();
    http.addEventListener('readystatechange', function () {
        if (http.readyState === 4 && http.status === 200) {
            modifica(JSON.parse(http.responseText));
        }
    });

}

function aceptarFormModal() {
    //Obtenemos los campos del formulario
    var matches = [];
    var searchEles = document.getElementById("modal-id").children;
    for (var i = 0; i < searchEles.length; i++) {
        if (searchEles[i].type == 'text') {
            matches.push(searchEles[i]);
        }
    }
    //console.log(matches);
    var data = [];
    //Cargamos los datos nuevos en data
    matches.forEach(element => {
        data.push(document.getElementById(element.id).value);
    });
    console.log(data);
    var accion = document.getElementById("btnModal").getAttribute('action')
    console.log(accion);
    if (accion == "POST") {

    } else if (accion == "PUT") {

    }
}

function postJson() {


    //Vaciamos los campos del formulario
    var matches = [];
    var searchEles = document.getElementById("modal-id").children;
    for (var i = 0; i < searchEles.length; i++) {
        if (searchEles[i].type == 'text') {
            matches.push(searchEles[i]);
        }
    }
    matches.forEach(element => {
        console.log(element.id);
        document.getElementById(element.id).value = "";
    });
    //POST
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
function putArticuloJson() {


    /* var json = JSON.stringify(matches);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", 'http://localhost:3000/articulos/' + '/12', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(json); */
}
