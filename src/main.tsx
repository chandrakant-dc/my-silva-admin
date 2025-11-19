import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroUIProvider } from '@heroui/react'
import Index from './routes/index.tsx'
import { ToastProvider } from "@heroui/toast";

createRoot(document.getElementById('root')!).render(
  <HeroUIProvider>
    <ToastProvider />
    <Index />
  </HeroUIProvider>,
)
