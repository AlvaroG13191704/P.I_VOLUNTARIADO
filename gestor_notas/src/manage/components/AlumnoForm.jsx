import { Button, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { onLoad } from '../../features/course/courseSlice';
export const AlumnoForm = () => {

    // hooks
    const dispatch = useDispatch();
    const seccion = useSelector(state => state.course);

    useEffect(() => {
        dispatch(onLoad())
    }, [])


    const [alumno, setAlumno] = useState({
        codigo: '',
        nombre: '',
        genero: 'Masculino',
        edad: '',
        fecha: '',
        cui: ''
    })
    const handleChange = e => {
        setAlumno((preventState) => ({
            ...preventState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(alumno)
    }
    return (
        <Container maxWidth="lg" >
            <Grid
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='flex-start'
                spacing={3}
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
                                />
                            </Grid>
                            <Grid item xs={2} sx={{ mt: 2 }} >
                                <TextField
                                    name='fecha'
                                    type="date"
                                    onChange={handleChange}
                                    fullWidth
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
                                />
                            </Grid>
                            {
                                seccion.materias.map(m => (
                                    
                                    <Grid item xs={4} key={m.materia}>
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            
                                            <Typography variant='h5'>{m.materia}</Typography>
                                            <Grid item xs={12} sx={{ mt: 2 }} >
                                                <TextField
                                                    name={`actividad_1_${m.materia}`}
                                                    label="Actividad 1"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder='Ingrese la actividad 1'
                                                    // value={actividades.actividad_1}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: 2 }} >
                                                <TextField
                                                    name={`actividad_2_${m.materia}`}
                                                    label="Actividad 2"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder='Ingrese la actividad 2'
                                                    // value={actividades.actividad_2}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: 2 }} >
                                                <TextField
                                                    name={`actividad_3_${m.materia}`}
                                                    label="Actividad 3"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder='Ingrese la actividad 3'
                                                    // value={actividades.actividad_3}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: 2 }} >
                                                <TextField
                                                    name={`actividad_4_${m.materia}`}
                                                    label="Actividad 4"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder='Ingrese la actividad 4'
                                                    // value={actividades.actividad_4}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: 2 }} >
                                                <TextField
                                                    name={`actividad_5_${m.materia}`}
                                                    label="Actividad 5"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder='Ingrese la actividad 5'
                                                    // value={actividades.actividad_5}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: 2 }} >
                                                <TextField
                                                    name={`actividad_6_${m.materia}`}
                                                    label="Actividad 6"
                                                    type="text"
                                                    onChange={handleChange}
                                                    placeholder='Ingrese la actividad 6'
                                                    // value={actividades.actividad_6}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: 2 }} >
                                                <TextField
                                                    name={`actividad_7_${m.materia}`}
                                                    label="Actividad 7"
                                                    type="text"
                                                    onChange={handleChange}
                                                    // value={actividades.actividad_7}
                                                    placeholder='Ingrese la actividad 7'
                                                    fullWidth
                                                />
                                            </Grid>
                                            {
                                                (m.materia === 'Matemáticas' || m.materia === 'Comunicación' || m.materia === 'Ciencias Naturales y Tecnología'|| m.materia === 'Ciencias Sociales')
                                                    ?<Grid item xs={12} sx={{ mt: 2 }} >
                                                        <TextField
                                                            name={`final_${m.materia}`}
                                                            label="Nota Examen"
                                                            type="text"
                                                            onChange={handleChange}
                                                            // value={actividades.actividad_7}
                                                            placeholder='Nota Examen final'
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    : <></>
                                            }       
                                        </Grid>
                                    </Grid>
                                ))
                            }
                            <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                                <Button variant='contained' fullWidth type='submit' color="success"  >
                                    Agregar alumno
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
