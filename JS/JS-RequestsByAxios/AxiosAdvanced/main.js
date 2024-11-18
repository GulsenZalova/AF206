import {
    GetAllCategories,
    GetCategoryByİd,
    DeleteCategory,
    PostCategory,
    UpdateCategory
 } from "./Api/Requests/Categories.js"


import {BaseURL} from "./Api/baseUrl.js"





 GetAllCategories(BaseURL)
.then(res=>console.log(res.data))



GetCategoryByİd(BaseURL, 2)
.then(res=>console.log(res.data))


DeleteCategory(BaseURL,2)
.then(res=>console.log(res.data))


let newCategory={
    name:"NewCategory",
    description:"new new"
}


PostCategory(BaseURL, newCategory)
.then(res=>console.log(res.data))


let updateCategory={
    description:"new new update"
}


UpdateCategory(BaseURL, 4, updateCategory)
.then(res=>console.log(res.data))