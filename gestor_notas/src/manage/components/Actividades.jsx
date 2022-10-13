import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

export const Actividades = ({values}) => {

    const actividades = []
    let keys = Object.keys(values);
    for(let i=0; i< keys.length; i++) {
        let key = keys[i]
        actividades.push(values[key])
    }
  return (
    <>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid item xs={12}>
                <Grid container >
                    {
                        actividades.map( (actividad,i) => (
                            (actividad === '')
                            ?<></>
                            :<Typography variant='h6' sx={{p:2}} key={i} >Actividad {i+1}: {actividad}</Typography>
                        ))
                    }
                </Grid>

            </Grid>
        </Grid>
    </>
  )
}
