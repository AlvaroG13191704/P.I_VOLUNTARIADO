import { Backdrop, Button, CircularProgress, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addAlumno, onLoad } from '../../features/course/courseSlice';
import { alumno_notas_1, alumno_notas_2 } from '../../sources/materias';
import { useNavigate } from 'react-router-dom';
import { FormAlumnos_2 } from '../../mainComponents/formAlumnos_2';
import { TopBar } from '../layout/TopBar';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

export const AlumnoForm = () => {

    // hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const seccion = useSelector(state => state.course);

    useEffect(() => {
        dispatch(onLoad())
    }, [])

    // Ver de que grado es, asi escoger que cual  notas hay que trabajar
    const notas_json = () => {
        if(seccion.grado === 'Primero' || seccion.grado === 'Segundo' || seccion.grado === 'Tercero' ){
            return alumno_notas_1;
        } 
        else {
            return alumno_notas_2;
        }

    }
    // loading
    const [open, setOpen] = useState(false);

    const handleClose = async event => {
        await delay(1000);
        setOpen(false);
        navigate(`/seccion/${seccion.id}`)
    }
    const handleToggle = () => {
        setOpen(!open);
    }

    const [alumno, setAlumno] = useState({
        codigo: '',
        nombre: '',
        genero: 'Masculino',
        edad: '',
        fecha: '',
        cui: '',
        ...notas_json()
    })

    const handleChange = e => {
        setAlumno((preventState) => ({
            ...preventState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch( addAlumno({
            ...alumno,
            id: uuid(),
        }))
        handleClose()
    }

    return (
        <Container maxWidth="lg" >
            <TopBar />
            <Grid
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='flex-start'
                spacing={3}
                sx={{mt:3}}
            >
                
                <Grid item xs={12} sx={{ mt: 3 }} >
                    <Typography variant='h2'>Datos del Alumno</Typography>
                </Grid>
                <Grid item xs={12} >
                    <form onSubmit={handleSubmit}>
                        <Grid container direction='row' spacing={3}>
                            <Grid item xs={5} sx={{ mt: 2 }} >
                                <TextField
                                    name='codigo'
                                    label="Código"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder='Ingrese el código'
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={7} sx={{ mt: 2 }} >
                                <TextField
                                    name='nombre'
                                    onChange={handleChange}
                                    label="Nombre Completo"
                                    type="text"
                                    placeholder='Ingrese el nombre'
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={3} >
                                <FormControl>
                                    <FormLabel id='genero'>Genero</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="genero"
                                        defaultValue="Masculino"
                                        name="genero"
                                        onChange={handleChange}
                                        
                                    >
                                        <FormControlLabel value='Masculino' control={<Radio />} label='Masculino' />
                                        <FormControlLabel value='Femenino' control={<Radio />} label='Femenino' />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2} sx={{ mt: 2 }} >
                                <TextField
                                    name='edad'
                                    label="Edad"
                                    type="number"
                                    onChange={handleChange}
                                    placeholder='Edad'
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={2} sx={{ mt: 2 }} >
                                <TextField
                                    name='fecha'
                                    type="date"
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={5} sx={{ mt: 2 }} >
                                <TextField
                                    name='cui'
                                    label="CUI"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder='Ingrese el CUI'
                                    fullWidth
                                    required
                                />
                            </Grid>
                            {
                                seccion.materias.map(m => (
                                    <FormAlumnos_2 m={m} handleChange={handleChange} key={m.materia} />
                                    
                                ))
                            }
                            <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                                <Button variant='contained' fullWidth type='submit' color="success" onClick={handleToggle}  >
                                    Agregar alumno
                                    <Backdrop
                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                        open={open}
                                    >
                                        <CircularProgress color='inherit' />
                                    </Backdrop>
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mt: 1 }} />
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}
