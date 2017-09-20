'use strict';
$(document).ready(eventos);

let estudiantes = [];
class Estudiante {
    constructor(nombre, puntosTecnicos, puntosHSE){
        this.nombre = nombre;
        this.puntosTecnicos = puntosTecnicos;
        this.puntosHSE = puntosHSE;
    }
}
 //la mayoria son funciones puras
function agregarEstudiante(nombre, puntosTecnicos, puntosHSE){
    let estudiante = new Estudiante(nombre, puntosTecnicos, puntosHSE);
    estudiantes.push(estudiante);
    return estudiante;
}

function mostrar(estudiante) {
    let fichaEstudiante = `
        <div class = "estudiante">
            <h3 class="text-uppercase">${estudiante.nombre}</h3>
            <strong>Tech Skills:</strong> ${estudiante.puntosTecnicos}%<br>
            <strong>Life Skills:</strong> ${estudiante.puntosHSE}%<br>
            <strong>Status:</strong> Active<br>
        </div>
    `
    return fichaEstudiante;
}

function mostrarLista(estudiantes){
    return estudiantes.map(mostrar);
}

function estudiantesPromedioalto(estudiantes) {
    return estudiantes.filter(a=>a.puntosTecnicos>=70 && a.puntosHSE>=70);
}

function reiniciar() {
    $('#puntosTecnicos').val('');
    $('#puntosHSE').val('');
    $("#nombre").val('');
    $("#nombre").next().css('visibility','hidden');
    $('#range').html(50);
    $('#range2').html(50);
    $('#agregar').removeAttr('data-dismiss');
}
function eventoAgregar (){
    let nombre = $('#nombre').val();
    let puntosTecnicos = $("#puntosTecnicos").val();
    let puntosHSE = $("#puntosHSE").val();
    let estudiante = agregarEstudiante(nombre, puntosTecnicos, puntosHSE);

    if(nombre==''){
        $("#nombre").next().css('visibility','visible');
    }else{
        $('#agregar').attr('data-dismiss',"modal");
        $("#fichas").html(mostrar(estudiante));
    }
}

function eventoMostrar(){
    $("#fichas").html(mostrarLista(estudiantes));
}

function eventoMostrarEmpleables() {
    let empleables = estudiantesPromedioalto(estudiantes);
    $('#fichas').html(mostrarLista(empleables));
}

function eventoEliminar() {
    let eliminar = estudiantesPromedioalto(estudiantes);
    estudiantes=eliminar;
    $('#fichas').html(mostrarLista(estudiantes));
}
function eventos(params) {
    $("#agregar").click(eventoAgregar);
    $('#agregando').click(reiniciar);
    $('#mostrar').click(eventoMostrar);
    $('#empleables').click(eventoMostrarEmpleables);
    $('#eliminadas').click(eventoEliminar);
}