
import { Box, Button, Divider, Grid, Tooltip, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { ActividadesForm } from '../components/ActividadesForm';
import { Actividades } from '../components/Actividades';
export const MateriaPage = () => {

    // hook
    const {name} = useParams();
    const {materias} = useSelector(state => state.course);

    const materia = materias.find(m => m.materia === name )
    
    console.log(materia)


  return (
    <Box sx={{width:'100%', p:3}}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
            <Grid item xs={4}>
                <Grid
                    container 
                    direction = 'column'
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Grid item xs = {12} sx={{mb:2}}>
                        <Typography variant='h2' sx={{p:0.5}} >{materia.materia}</Typography>
                        
                        <Grid container sx={{mt:1.3}}>
                        <Grid item container justifyContent="space-evenly" >
                            <Grid item>
                                <Grid container direction='column' justifyContent="center" alignItems="center">
                                    <PictureAsPdfIcon fontSize='large'/>
                                    <Tooltip title="Generar notas de la materia" placement="bottom-start">
                                        <Button>Generar PDF</Button>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction='column' justifyContent="center" alignItems="center">
                                    <PictureAsPdfIcon fontSize='large'/>
                                    <Tooltip title="Generar notas de la materia" placement="bottom-start">
                                        <Button>Generar PDF</Button>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h2' sx={{p:0.5}} >Actividades creadas</Typography>
                <Divider />
                <Actividades values={materia.value} />
            </Grid>
            <Grid item xs={4}>
                <ActividadesForm materia={materia.materia} />
            </Grid>
            <Grid item xs={6}>
                4
            </Grid>
        </Grid>
    </Box>
  )
}
