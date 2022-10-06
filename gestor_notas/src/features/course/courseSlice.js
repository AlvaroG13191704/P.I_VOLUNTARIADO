import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:'',
    profesora:'',
    grado:'',
    seccion:'',
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
        }
    }
})
export const {addMainAttributes} = courseSlice.actions
export default courseSlice.reducer // exportamos las funciones o sea el reducer
