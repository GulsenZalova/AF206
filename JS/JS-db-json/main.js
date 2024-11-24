import BaseURL from "./Api/baseUrl.js";
import { GetAllProducts } from "./Api/Requests/products.js";


GetAllProducts(`${BaseURL}/users`)
.then(res=>console.log(res))

