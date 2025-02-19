import Add from "../Pages/Add/Add";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import UserRoot from "../Pages/UserRoot";

const Routes=[{
    path:"",
    element:<UserRoot/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"add",
            element:<Add/>
        },
        {
            path:"favorites",
            element:<Favorites/>
        },
        {
            path:"notfound",
            element:<NotFound/>
        }
    ]
}]

export default Routes
