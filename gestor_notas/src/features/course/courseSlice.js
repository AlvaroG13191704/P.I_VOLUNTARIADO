import { createSlice } from "@reduxjs/toolkit";
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
        },
        addActivities: (state,action) => {
            const {nombre, actividades} = action.payload
            const materia = state.materias.find(ma => ma.materia === nombre)
            materia.value = actividades
            
        }
    }
})
export const {addMainAttributes, addActivities} = courseSlice.actions
export default courseSlice.reducer // exportamos las funciones o sea el reducer
