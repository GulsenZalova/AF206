import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CategoryApi } from './slice/CategoryApi'


export const store= configureStore({
    reducer:{
        [CategoryApi.reducerPath]:CategoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CategoryApi.middleware),
    
})


setupListeners(store.dispatch)