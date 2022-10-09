import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivities } from "../../features/course/courseSlice";

export const ActividadesForm = ({materia}) => {
    //hoooks
    const [actividades, setActividades] = useState({
      actividad_1: '',
      actividad_2: '',
      actividad_3: '',
      actividad_4: '',
      actividad_5: '',
      actividad_6: '',
      actividad_7: '',
    });

    const dispatch = useDispatch();
    

    const handleSubmit = e => {
      e.preventDefault()
      dispatch( addActivities({
        nombre: materia,
        actividades: actividades
      }))
      setActividades({
        actividad_1: '',
        actividad_2: '',
        actividad_3: '',
        actividad_4: '',
        actividad_5: '',
        actividad_6: '',
        actividad_7: '',
      })

    }

    const handleChange = e => {
      setActividades((preventState) => ({
        ...preventState,
        [e.target.name] : e.target.value
      }))
    }
    
  return (
    <form onSubmit={handleSubmit}>
    <Grid container>
      <Grid item xs={12} sx={{mt:2}} > 
        <TextField
          name='actividad_1'
          label="Actividad 1"
          type="text" 
          onChange={handleChange}
          placeholder='Ingrese la actividad 1' 
          value={actividades.actividad_1}
          fullWidth
          />
      </Grid>
      <Grid item xs={12} sx={{mt:2}} > 
        <TextField
          name='actividad_2'
          label="Actividad 2"
          type="text" 
          onChange={handleChange}
          placeholder='Ingrese la actividad 2' 
          value={actividades.actividad_2}
          fullWidth
          />
      </Grid>
      <Grid item xs={12} sx={{mt:2}} > 
        <TextField
          name='actividad_3'
          label="Actividad 3"
          type="text" 
          onChange={handleChange}
          placeholder='Ingrese la actividad 3' 
          value={actividades.actividad_3}
          fullWidth
          />
      </Grid>
      <Grid item xs={12} sx={{mt:2}} > 
        <TextField
          name='actividad_4'
          label="Actividad 4"
          type="text" 
          onChange={handleChange}
          placeholder='Ingrese la actividad 4' 
          value={actividades.actividad_4}
          fullWidth
          />
      </Grid>
      <Grid item xs={12} sx={{mt:2}} > 
        <TextField
          name='actividad_5'
          label="Actividad 5"
          type="text" 
          onChange={handleChange}
          placeholder='Ingrese la actividad 5' 
          value={actividades.actividad_5}
          fullWidth
          />
      </Grid>
      <Grid item xs={12} sx={{mt:2}} > 
        <TextField
          name='actividad_6'
          label="Actividad 6"
          type="text" 
          onChange={handleChange}
          placeholder='Ingrese la actividad 6' 
          value={actividades.actividad_6}
          fullWidth
          />
      </Grid>
      <Grid item xs={12} sx={{mt:2}} > 
        <TextField
          name='actividad_7'
          label="Actividad 7"
          type="text" 
          onChange={handleChange}
          value={actividades.actividad_7}
          placeholder='Ingrese la actividad 7' 
          fullWidth
          />
      </Grid>
      <Grid item xs={12}  sm={12} sx={{mt:2}}>
        <Button variant='contained' fullWidth type='submit' >
          Agregar actividades 
        </Button>
      </Grid>
    </Grid>
  </form>
  )
}
