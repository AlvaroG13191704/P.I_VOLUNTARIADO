import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField, Typography } from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FormAlumnos_2 = ({m, handleChange}) => {
    return (
        <Grid item xs={12} key={m.materia}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant='h6' >{m.materia}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <Grid item xs={12} sx={{ mt: 2 }} >
                            <TextField
                                name={`actividad_1_${m.materia}`}
                                label="Actividad 1"
                                type="text"
                                onChange={handleChange}
                                placeholder='Ingrese la actividad 1'

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

                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }} >
                            <TextField
                                name={`actividad_7_${m.materia}`}
                                label="Actividad 7"
                                type="text"
                                onChange={handleChange}

                                placeholder='Ingrese la actividad 7'
                                fullWidth
                            />
                        </Grid>
                        {
                            (m.materia === 'Matemáticas' || m.materia === 'Comunicación' || m.materia === 'Ciencias Naturales y Tecnología' || m.materia === 'Ciencias Sociales'|| m.materia === 'Media Social y Natural')
                                ? <Grid item xs={12} sx={{ mt: 2 }} >
                                    <TextField
                                        name={`final_${m.materia}`}
                                        label="Nota Examen"
                                        type="text"
                                        onChange={handleChange}

                                        placeholder='Nota Examen final'
                                        fullWidth
                                    />
                                </Grid>
                                : <></>
                        }
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}
