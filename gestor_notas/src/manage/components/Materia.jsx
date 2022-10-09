

import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Grid, ListItem, ListItemIcon, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';


export const Materia = ({materia}) => {
  //hook
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/seccion/materia/${materia}`)
  }
  return (
    <>
        <ListItem  button disablePadding sx={{p:1.2}} onClick={handleClick}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <Grid container >
            <Typography variant='h5'>{materia}</Typography>
          </Grid>
        </ListItem>
    </>
  )
}
