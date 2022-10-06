import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { AppTheme } from './theme/AppTheme'
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <AppTheme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppTheme>
  )
}
