function getJson(){
    console.log("asdasdasd");
    var tabla = document.createElement("table");

    var trCabecera = document.createElement("tr");

    var cabeceraElements = ["id","Nombre","Descripcion","Precio"];
    cabeceraElements.forEach(element => {
        
        var tdname = document.createElement("th");
        texto = document.createTextNode(element);
        tdname.appendChild(texto);
        trCabecera.appendChild(tdname);
    });/* 
    var tdID = document.createElement("td");
    texto = document.createTextNode("id");
    tdID.appendChild(texto);
    trCabecera.appendChild(tdID);

    var tdNombre = document.createElement("td");
    texto = document.createTextNode("nombre");
    tdNombre.appendChild(texto);
    trCabecera.appendChild(tdNombre);

    var tdDescripcion = document.createElement("td");
    texto = document.createTextNode("descripcion");
    tdDescripcion.appendChild(texto);
    trCabecera.appendChild(tdDescripcion);

    var tdPrecio = document.createElement("td");
    texto = document.createTextNode("precio");
    tdPrecio.appendChild(texto);
    trCabecera.appendChild(tdPrecio); */

    tabla.appendChild(trCabecera);
    document.getElementById("articulos").appendChild(tabla);
}