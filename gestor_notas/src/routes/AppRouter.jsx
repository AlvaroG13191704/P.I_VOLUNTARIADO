import { Route, Routes } from 'react-router-dom'
import {MainPage} from '../manage/pages/mainPage'
import { SeccionPage } from '../manage/pages/seccionPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/seccion/:id' element={<SeccionPage />} />
    </Routes>
  )
}
