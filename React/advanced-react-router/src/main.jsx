import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductsProvider from "./context/ProductsContext"
import FavoriteProvider from './context/FavoritesContext'
import BasketProvider from "./context/BasketContext"
createRoot(document.getElementById('root')).render(
<BasketProvider>
<FavoriteProvider>
   <ProductsProvider>
    <App />
  </ProductsProvider>
</FavoriteProvider>
</BasketProvider>,
)
