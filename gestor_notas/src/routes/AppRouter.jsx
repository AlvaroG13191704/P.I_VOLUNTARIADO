import { Route, Routes } from 'react-router-dom'
import { AlumnoForm } from '../manage/components/AlumnoForm'
import {MainPage} from '../manage/pages/mainPage'
import { MateriaPage } from '../manage/pages/MateriaPage'
import { SeccionPage } from '../manage/pages/seccionPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/seccion/:id' element={<SeccionPage />} />
        <Route path='/seccion/materia/:name' element={<MateriaPage />} />
        <Route path='/seccion/form' element={<AlumnoForm />} />
    </Routes>
  )
}
