import AddProduct from "../pages/Admin/AddProduct";
import AdminRoot from "../pages/Admin/AdminRoot";
import DashBoard from "../pages/Admin/DashBoard";
import Basket from "../pages/User/Basket";
import Favorites from "../pages/User/Favorites";
import Home from "../pages/User/Home";
import NoPage from "../pages/User/NoPage";
import ProductDetail from "../pages/User/ProductDetail";
import Products from "../pages/User/Products";
import UserRoot from "../pages/User/UserRoot";


const ROUTES = [

    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/products/:id",
                element: <ProductDetail />,
            },
            
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "*",
                element: <NoPage />
            }
        ]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
       {
        path:"",
        element:<DashBoard/>
       },
       {
        path:"addproduct",
        element:<AddProduct/>
       }
        ]
    }
]


export default ROUTES