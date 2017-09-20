'use strict';

const aplicacion = {
    estudiantes:[],

    agregarEstudiante:(nombre, puntosTecnicos, puntosHSE)=>{
        let estudiante = {
            nombre: nombre,
            puntosTecnicos: puntosTecnicos,
            puntosHSE: puntosHSE
        }
        aplicacion.estudiantes.push(estudiante);
        return estudiante;
    },
    mostrar:(estudiante)=> {
        let fichaEstudiante = `
            <div class = "estudiante">
                <h3 class="text-uppercase">${estudiante.nombre}</h3>
                <strong>Tech Skills:</strong> ${estudiante.puntosTecnicos}%<br>
                <strong>Life Skills:</strong> ${estudiante.puntosHSE}%<br>
                <strong>Status:</strong> Active<br>
            </div>
        `
        return fichaEstudiante;
    },
    mostrarLista:(estudiantes)=>{
        return estudiantes.map(mostrar);
    },
    estudiantesPromedioalto:()=> {
        return aplicacion.estudiantes.filter(a=>a.puntosTecnicos>=70 && a.puntosHSE>=70);
    },
    reiniciar:()=>{
        $('#puntosTecnicos').val('');
        $('#puntosHSE').val('');
        $("#nombre").val('');
        $("#nombre").next().css('visibility','hidden');
        $('#range').html(50);
        $('#range2').html(50);
        $('#agregar').removeAttr('data-dismiss');
    },
    eventoAgregar:()=>{
        let nombre = $('#nombre').val();
        let puntosTecnicos = $("#puntosTecnicos").val();
        let puntosHSE = $("#puntosHSE").val();
        if(nombre==''){
            $("#nombre").next().css('visibility','visible');
        }else{
            $('#agregar').attr('data-dismiss',"modal");
            let estudiante = aplicacion.agregarEstudiante(nombre, puntosTecnicos, puntosHSE);
            $("#fichas").html(aplicacion.mostrar(estudiante));
        }
    },
    eventoMostrar:()=>{
        $("#fichas").html(aplicacion.mostrarLista(aplicacion.estudiantes));
    },
    eventoMostrarEmpleables:()=> {
        let empleables = aplicacion.estudiantesPromedioalto();
        $('#fichas').html(aplicacion.mostrarLista(empleables));
    },
    eventoEliminar:()=> {
        aplicacion.estudiantesPromedioalto();
        $('#fichas').html(aplicacion.mostrarLista(estudiantes));
    },
    iniciar:()=> {
        $("#agregar").click(aplicacion.eventoAgregar);
        $('#agregando').click(aplicacion.reiniciar);
        $('#mostrar').click(aplicacion.eventoMostrar);
        $('#empleables').click(aplicacion.eventoMostrarEmpleables);
        $('#eliminadas').click(aplicacion.eventoEliminar);
    }
}
 $(document).ready(()=>{
    aplicacion.iniciar();
 })