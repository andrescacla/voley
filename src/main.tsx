import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DataProvider } from './context/data/DataProvider.tsx'
import {
  RouterProvider
} from "react-router";
import router from './router/RouterProvider.tsx';
import './i18n';
import './styles/global.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
      
    </DataProvider>
  </StrictMode>,
)
