import { AddOutlined } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { onLoad } from '../../features/course/courseSlice';
import { MainInformation } from '../components/MainInformation';
import { MateriasInformation } from '../components/MateriasInformation';



export const SeccionPage = () => {

  // hooks
  const dispatch = useDispatch();
  
  const seccionCompleta = useSelector(state => state.course);

  useEffect(() => {
    console.log('Cargando')
    dispatch( onLoad() )
  }, [])

  
  console.log(seccionCompleta)

  const navigate = useNavigate();



  const handleForm = () => {
    navigate('/seccion/form')
  }

  
  return (
    <Box sx={{ width: '100%', p:3}}>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1} 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <MainInformation seccionCompleta={seccionCompleta}/>
        </Grid>
        <Grid item xs={6}>
          <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          >
          <Grid item xs = {12} container  direction="column">
              <Typography variant='h3'>Listado de Alumnos</Typography>
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs={6}>
          <MateriasInformation />
        </Grid>
        <Grid item xs={6}>
          <Grid 
            container
            direction= 'column'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            {/* Alumnos */}
            <Typography variant='h5'>Alumno 1</Typography>
            <Typography variant='h5'>Alumno 2</Typography>
          </Grid>
        </Grid>
      </Grid>
      <IconButton
        size='large'
        sx={{
          color:'write',
          backgroundColor: 'error.main',
          ':hover':{backgroundColor: 'error.main', opacity:0.9},
          position: 'fixed',
          right:50,
          bottom: 50,
        }}
        onClick={handleForm}
      >
        <AddOutlined sx={{ fontSize:70 }}/>
      </IconButton>
    </Box>
  )
}
