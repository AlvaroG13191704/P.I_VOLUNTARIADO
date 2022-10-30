import { Button, ButtonBase, Grid, Paper, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { deleteAlumno } from '../../features/course/courseSlice';

export const Alumno = ({ alumno }) => {

    // 
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch( deleteAlumno ({
            id: alumno.id
        }))
    }
    const handleEdit = () => {
        console.log('Editando')
    }
    
    return (
        <Paper
            sx={{
                p: 1.3,
                maxWidth: 300,
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid
                container 
            >
                <Grid item>
                    <ButtonBase >
                        <AccountCircleIcon />
                    </ButtonBase>
                    <Grid item container xs={12}>
                        <Grid item container direction='column' spacing={2}>
                            <Grid item >
                                <Typography gutterBottom variant="h6" component="div">
                                    {alumno.nombre}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    CUI: {alumno.cui}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Edad: {alumno.edad}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Fecha de nacimiento: {alumno.fecha}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ mt: 1, ml: -1 }}>
                            <Button color='error' onClick={handleDelete}>
                                Eliminar
                            </Button>
                            <Button color='success' onClick={handleEdit}>
                                Editar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
