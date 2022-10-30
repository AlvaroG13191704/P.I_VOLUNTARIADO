import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../app/localStorage";
import { materias_1, materias_2 } from "../../sources/materias";


const initialState = {
    id:'',
    profesora:'',
    grado:'',
    seccion:'',
    materias: [],
    alumnos:[],
}


export const courseSlice = createSlice({
    name:'course',
    initialState, // el slice puede ser cualquier cosa 
    reducers: { // funciones para alterar el estado
        addMainAttributes: (state,action) => {
            const {id,profesora, grado, seccion} = action.payload
            state.id = id
            state.profesora = profesora
            state.grado = grado
            state.seccion = seccion
            if (grado === 'Primero' || grado === 'Segundo' || grado === 'Tercero'){
                state.materias = materias_1
            }else {
                state.materias = materias_2
            }
            // guardar en localStorage
            saveState(state)
        },
        addActivities: (state,action) => {
            const {nombre, actividades} = action.payload
            const materia = state.materias.find(ma => ma.materia === nombre)
            materia.value = actividades
            // guardar en localStorage
            saveState(state)
        },
        addAlumno: (state, action) => {
            state.alumnos.push(action.payload)
            saveState(state)
        },
        deleteAlumno: (state,action) => {
            const {id} = action.payload
            const alumno = state.alumnos.find(alumno => alumno.id === id)
            if (alumno) {
                state.alumnos.splice(state.alumnos.indexOf(alumno),1)
                saveState(state)
            }
        },
        onLoad: (state) => {
            const values = loadState()
            if (values === undefined) {
                return 
            } else {
                const {id, profesora, grado, seccion, materias, alumnos } = values
                state.id = id
                state.profesora = profesora
                state.grado = grado
                state.seccion = seccion
                state.materias = materias
                state.alumnos = alumnos
            }
            

        }
    }
})
export const {addMainAttributes, addActivities, onLoad, addAlumno, deleteAlumno} = courseSlice.actions
export default courseSlice.reducer // exportamos las funciones o sea el reducer
