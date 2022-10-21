import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const SeccionCard = ({inputs}) => {

    
  return (
    <Card sx={{minWidth:275,mb:2}} >
        <CardContent>
            <Typography sx={{fontSize:20}} color='text.primary' gutterBottom>
                Sección: {inputs.seccion}
            </Typography>
            <Typography variant="h5" component="div">
                Grado: {inputs.grado} Primaria
            </Typography>
            <Typography variant="h6">
                Profesora: {inputs.profesora}
                <br />
            </Typography>
        </CardContent>
        <CardActions>
            <Link to={`/seccion/${inputs.id}`}>
                <Button size="small">Trabajar</Button>
            </Link>
        </CardActions>
    </Card>
  )
}
