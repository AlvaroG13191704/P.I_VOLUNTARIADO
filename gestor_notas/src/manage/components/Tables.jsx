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
        Object.entries(alumno).forEach(([key,value]) => {
            if (key === 'nombre'){
                jsx.push(<TableCell align="left" key={key}>{value}</TableCell>)
            }
            if (key === `actividad_${c}_${materia}` ) {
                console.log(key,value)
                zona.push(parseInt(value))
                c++
                jsx.push(<TableCell align="center" key={key}>{value}</TableCell>)    
                
            }
            if ( key === `final_${materia}` ) {
                console.log(key,value)
                console.log(zona)
                const total = zona.reduce((a,b) => a+b, 0);
                jsx.push(<TableCell align="center" key='zona'>{total}</TableCell>) 
                jsx.push(<TableCell align="center" key={key}>{value}</TableCell>)
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
                        <TableCell>{actividades.value.actividad_1}</TableCell>
                        <TableCell>{actividades.value.actividad_2}</TableCell>
                        <TableCell>{actividades.value.actividad_3}</TableCell>
                        <TableCell>{actividades.value.actividad_4}</TableCell>
                        <TableCell>{actividades.value.actividad_5}</TableCell>
                        <TableCell>{actividades.value.actividad_6}</TableCell>
                        <TableCell>{actividades.value.actividad_7}</TableCell>
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
