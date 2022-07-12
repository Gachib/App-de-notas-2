const funcionesDeTareas = require('./funcionesDeTareas.js');
const tareasJs = funcionesDeTareas.leerArchivo();

let procedimiento = process.argv[2];

switch (procedimiento) {
    case 'listar':
        let contadorListar = 0;
        tareasJs.forEach(tarea => {
            contadorListar = contadorListar + 1;
            console.log(`${contadorListar}. ${tarea.titulo} - ${tarea.estado}`);
        });
        break

    case 'crear':
        let titulo = process.argv[3];
        let nuevaTarea = {
            titulo: titulo,
            estado: "pendiente"
        }
        funcionesDeTareas.guardarTarea(nuevaTarea);
        console.log(`La tarea ${nuevaTarea.titulo} - ${nuevaTarea.estado} fue creada`);
        break

    case 'filtrar':
        let estado = process.argv[3];
        let TareasFiltradas = funcionesDeTareas.filtrarPorEstado(estado);
        let contadorFiltrar = 0;
        TareasFiltradas.forEach(tarea => {
            contadorFiltrar = contadorFiltrar + 1;
            console.log(`${contadorFiltrar}. ${tarea.titulo} - ${tarea.estado}`);
        });
        break


    case undefined:
        console.log('Atencion - Tienes que pasar una accion');
        break

    default:
        console.log('No entiendo que quieres hacer');
        break
}