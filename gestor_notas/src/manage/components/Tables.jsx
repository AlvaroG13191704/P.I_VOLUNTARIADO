import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Paper from '@mui/material/Paper';
import { useState } from "react";



export const Tables = ({ materia }) => {

    // hooks
    const [notas_alumno, setNotas_alumno] = useState([]);

    const actividades_materia = JSON.parse(localStorage.getItem('seccion'))
    const actividades = actividades_materia.materias.find( m => m.materia === materia)



    console.log(actividades_materia)

    
    const notas = alumno => {
        const jsx = []
        const zona = []
        let c = 1
        let total = 0
        let final = 0
        Object.entries(alumno).forEach(([key,value]) => {
            if (key === 'nombre'){
                jsx.push(<TableCell align="left" key={key}>{value}</TableCell>)
            }
            if (key === `actividad_${c}_${materia}` ) {
                console.log(key,value)
                if (value !== ""){
                    zona.push(parseInt(value))
                    c++
                    jsx.push(<TableCell align="center" key={key}>{value}</TableCell>)  
                } else {
                    jsx.push(<TableCell align="center" key={key}>-</TableCell>)
                    jsx.push(<TableCell align="center" key={key}>-</TableCell>)
                    jsx.push(<TableCell align="center" key={key}>-</TableCell>)
                    jsx.push(<TableCell align="center" key={key}>{total}</TableCell>)
                }
                
            }
            if (key == `actividad_7_${materia}`) {
                console.log(key,value)
                console.log(zona)
                total = zona.reduce((a,b) => a+b, 0);
                jsx.push(<TableCell align="center" key={value}>{total}</TableCell>) 
            }
            if ( key === `final_${materia}` ) {
                final = parseInt(value)
                jsx.push(<TableCell align="center" key={key}>{value}</TableCell>)
                jsx.push(<TableCell align="center" key={key}>{total + final}</TableCell>)
            }
        })
        return jsx
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} arial-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell>Alumno</TableCell>
                        <TableCell>Actividad 1</TableCell>
                        <TableCell>Actividad 2</TableCell>
                        <TableCell>Actividad 3</TableCell>
                        <TableCell>Actividad 4</TableCell>
                        <TableCell>Actividad 5</TableCell>
                        <TableCell>Actividad 6</TableCell>
                        <TableCell>Actividad 7</TableCell>
                        <TableCell>Zona</TableCell>
                        <TableCell>Evaluación</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        actividades_materia.alumnos.map( alumno => (
                            <TableRow
                                key={alumno.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {
                                    notas(alumno)
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
