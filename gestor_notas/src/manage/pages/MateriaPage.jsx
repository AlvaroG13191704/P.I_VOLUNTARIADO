
import { Box, Button, Divider, Grid, Tooltip, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { ActividadesForm } from '../components/ActividadesForm';
import { Actividades } from '../components/Actividades';
import { TopBar } from '../layout/TopBar';
import { Tables } from '../components/Tables';

export const MateriaPage = () => {

    // hook
    const { name } = useParams();
    const navigate = useNavigate();

    const { materias } = JSON.parse(localStorage.getItem('seccion'))

    const valores = materias.find(m => m.materia === name)

    const { materia, value } = valores

    

    const handleClick = () => {
        console.log('click')
        navigate('/pdf')
    }
    return (
        <Box sx={{ width: '100%', p: 3 }}>
            <TopBar />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ mt: 4 }}
            >
                <Grid item xs={4}>
                    <Grid
                        container
                        direction='column'
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={12} sx={{ mb: 1 }}>
                            <Typography variant='h2' sx={{ p: 0.5 }} >{materia}</Typography>
                            <Grid container sx={{ mt: 1.3 }}>
                                <Grid item container justifyContent="space-evenly" >
                                    <Grid item>
                                        <Grid container direction='column' justifyContent="center" alignItems="center">
                                            <PictureAsPdfIcon fontSize='large' />
                                            <Tooltip title="Generar notas de la materia" placement="bottom-start">
                                                <Button onClick={handleClick}>
                                                    Generar PDF
                                                </Button>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                    {/* <Grid item>
                                <Grid container direction='column' justifyContent="center" alignItems="center">
                                    <PictureAsPdfIcon fontSize='large'/>
                                    <Tooltip title="Generar notas de la materia" placement="bottom-start">
                                        <Button>Generar PDF</Button>
                                    </Tooltip>
                                </Grid>
                            </Grid> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h2' sx={{ p: 0.5 }} >Actividades creadas</Typography>
                    <Divider />
                    <Actividades values={value} />
                </Grid>
                <Grid item xs={4}>
                    <ActividadesForm materia={materia} />
                </Grid>
                <Grid item xs={8}>
                    <Tables materia={materia} />
                </Grid>
            </Grid>
        </Box>
    )
}
