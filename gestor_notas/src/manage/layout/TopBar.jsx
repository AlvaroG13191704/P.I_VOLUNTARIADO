import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onLoad } from '../../features/course/courseSlice';
import { useDispatch, useSelector } from 'react-redux';



const navItems = ['Pagina Principal', 'Contacto de servicio'];

export const TopBar = () => {

    const {id} = useSelector(state => state.course);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( onLoad() )
    }, [])
    const nagivate = useNavigate();

    const handleSearch = (item) => {
        if (item === 'Pagina Principal') {
            nagivate(`/seccion/${id}`)
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Gestor de notas
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }} onClick={() => handleSearch(item)}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        )
}
