import { createBrowserRouter } from "react-router-dom";
import Register from "./views/REGISTER/Regis";
import Login from "./views/LOGIN/Login";
import UserProfile from "./views/USER/UserProfile";
import Admin from "./views/ADMIN/Adminuserlist"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>

    },
    
    {
        path:'/register',
        element:<Register/>

    },

    
    {
        path:'/profile',
        element:<UserProfile/>

    },
    {
        path:'/admin',
        element:<Admin/>

    },


])
export default router;