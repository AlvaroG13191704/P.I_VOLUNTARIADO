

import { Grid, Typography } from '@mui/material'
import React from 'react'

export const MainInformation = ({seccionCompleta}) => {
  const {seccion} = JSON.parse(localStorage.getItem('seccion'))

  return (
    <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
    >
        <Grid item xs = {12} sx={{mb:2,borderBottom:1}}>
            <Typography variant='h3' sx={{p:0.5}} >{seccionCompleta.grado} Primaria</Typography>
            <Typography variant='h4' sx={{p:0.5}} >Seccion: {seccion}</Typography>
            <Typography variant='h5' sx={{p:0.5, mb:1.5}} >Profesora: {seccionCompleta.profesora}</Typography>
        </Grid>
    </Grid>
  )
}
