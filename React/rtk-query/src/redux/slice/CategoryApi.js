import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const CategoryApi=createApi({
    reducerPath: 'categoryApi', 
    baseQuery: fetchBaseQuery({ baseUrl: 'https://northwind.vercel.app/api'}),
    endpoints: (builder) => ({
        getCategories: builder.query({
          query: () => `/categories`,
        }),
        getCategory:builder.query({
            query:(id)=> `/categories/${id}`
        }),
        deleteCategory:builder.mutation({
            query:(id)=>({
                url: `/categories/${id}`,
                method:"DELETE"
            })
        }),
        postCategory:builder.mutation({
            query:(newCategory)=>({
                url:"/categories",
                method:"POST",
                body:newCategory,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            })
        }),
        updateCategory:builder.mutation({
            query:(id,updateCategory)=>({
                url:`/categories/${id}`,
                method:"PUT",
                body:updateCategory,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            })
        })
      }),
})


export const {useGetCategoriesQuery,useGetCategoryQuery,useDeleteCategoryMutation,usePostCategoryMutation} = CategoryApi
