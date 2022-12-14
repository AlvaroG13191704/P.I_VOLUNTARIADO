import { AddOutlined } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { onLoad } from '../../features/course/courseSlice';
import { Alumno } from '../components/Alumno';
import { MainInformation } from '../components/MainInformation';
import { MateriasInformation } from '../components/MateriasInformation';
import { TopBar } from '../layout/TopBar';



export const SeccionPage = () => {

  // hooks
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( onLoad() )
  }, [])

  const seccionCompleta = useSelector(state => state.course);
 
  const navigate = useNavigate();

  const handleForm = () => {
    navigate('/seccion/form')
  }

  
  return (
    <Box sx={{ width: '100%', p:3}}>
      <TopBar />
      <Grid 
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        rowSpacing={1} 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{mt:4}}
        >
        <Grid item xs={6}>
          <MainInformation seccionCompleta={seccionCompleta}/>
        </Grid>
        <Grid item xs={6}>
          <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          >
          <Grid item xs = {12}>
              <Typography variant='h3'>Listado de Alumnos</Typography>
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs={4}>
          <MateriasInformation />
        </Grid>
        <Grid item xs={8} >
              <Grid container item xs={12}>
                {
                  seccionCompleta.alumnos.map(alumno => (
                    <Alumno key={alumno.id} alumno={alumno} />
                  ))
                }
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
