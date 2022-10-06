import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMainAttributes } from '../../features/course/courseSlice';
import { SeccionCard } from '../../mainComponents/SeccionCard';
import { v4 as uuid } from 'uuid';

export const MainPage = () => {
  // hooks
  const dispatch = useDispatch();
  const seccion_created = useSelector(state => state.course);
  const [inputs, setInputs] = useState({
    profesora:'',
    grado:'',
    seccion:''
  });

  const handleChange = (e) => {
    setInputs((preventState) => ({
      ...preventState,
      [e.target.name] : e.target.value
    }))
    
  }
  // Cuando se manda el form se crea una tarjeta 
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch( addMainAttributes({
      ...inputs,
      id: uuid(),
    }) )
    setInputs({
      profesora:'',
      grado:'',
      seccion:''
    })
  }

  return (
    <Grid 
      container 
      spacing={2}
      alignItems = "center"
      justifyContent="center"
      direction="column"
    >
      <Grid item xs={12} sx={{borderBottom:1}}>
        <Typography variant="h1">Bienvenidos</Typography>
      </Grid>


      <Grid item xs={12} sx={{mt:2}} >
        {
          (seccion_created.profesora == '')
          ?<></>
          :<SeccionCard inputs={seccion_created} />
        }
      </Grid>


      <Grid item xs={12} sx={{borderTop:1}}>
        <Typography variant="h4">Crea una nueva sección</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}} > 
              <TextField 
                name='profesora'
                label="Nombre de la profesor@"
                value={inputs.profesora} 
                onChange={handleChange}
                type="text" 
                placeholder='Nombre completo...' 
                fullWidth
                />
            </Grid>
            <FormControl fullWidth sx={{mt:2}}>
              <InputLabel id='seccion'>Sección</InputLabel>
              <Select
                labelId='seccion'
                id='seccion'
                value={inputs.seccion}
                label='Sección'
                onChange={handleChange}
                name='seccion'
              >
                <MenuItem value={'A'}>A</MenuItem>
                <MenuItem value={'B'}>B</MenuItem>
                <MenuItem value={'C'}>C</MenuItem>
                <MenuItem value={'D'}>D</MenuItem>
                <MenuItem value={'E'}>E</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{mt:2}}>
              <InputLabel id='grado'>Grado</InputLabel>
              <Select
                labelId='grado'
                name='grado'
                id='grado'
                value={inputs.grado}
                label='Grado'
                onChange={handleChange}
              >
                <MenuItem value={'Primero'}>1ro</MenuItem>
                <MenuItem value={'Segundo'}>2do</MenuItem>
                <MenuItem value={'Tercero'}>3ro</MenuItem>
                <MenuItem value={'Cuarto'}>4to</MenuItem>
                <MenuItem value={'Quinto'}>5to</MenuItem>
                <MenuItem value={'Sexto'}>6to</MenuItem>
              </Select>
            </FormControl>
            <Grid item xs={12}  sm={12} sx={{mt:2}}>
              <Button variant='contained' fullWidth type='submit' >
                Agregar sección 
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
