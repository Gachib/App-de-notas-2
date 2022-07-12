const fs = require('fs');

let funcionesDeTareas = {
    leerArchivo: function () {
        let tareas = fs.readFileSync('./app-tareas/tareas.json', 'utf-8');
        let tareasJs = JSON.parse(tareas);
        return tareasJs;
    },
    escribirJson: function(arrayDeTareas){
        let agregarAlArray = JSON.stringify(arrayDeTareas);
        fs.writeFileSync("./app-tareas/tareas.json", agregarAlArray, "utf-8");
    },
    guardarTarea: function(objetoTarea) {
        let miArray = this.leerArchivo();
        miArray.push(objetoTarea);
        this.escribirJson(miArray)
    },
    filtrarPorEstado: function(estado) {
        let miArray = this.leerArchivo();
        let filtradoPorEstado = miArray.filter(tarea => tarea.estado == estado);
        return filtradoPorEstado;
    }
}

module.exports = funcionesDeTareas;