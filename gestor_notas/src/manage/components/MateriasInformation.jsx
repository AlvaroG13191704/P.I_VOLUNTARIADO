import { Grid, List, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { Materia } from "./materia";

export const MateriasInformation = () => {
    
    //hook 
    const {materias} = useSelector(state => state.course);
  return (
    <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='flex-start'

    >
        <Grid item xs = {12} sx={{p:1}}>
            <Typography variant='h4' sx={{mt:0.3}}>Materias</Typography>
            <List  component="nav" aria-label="mailbox folders">
                {
                    materias.map( materia => (
                        <Materia materia={materia.materia} key={materia.materia}/>
                    ))
                }
            </List>
        </Grid>
    </Grid>
  )
}
