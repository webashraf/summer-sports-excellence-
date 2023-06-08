import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'classes',
                element: <ClassesPage></ClassesPage>
            }
        ]
    }, {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/manageclasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: '/dashboard/manageuser',
                element: <ManageUser></ManageUser>
            },
            {
                path: '/dashboard/addclass',
                element: <AddClass></AddClass>
            },
            {
                path: '/dashboard/myclasses',
                element: <MyClasses></MyClasses>
            }
        ]
    }
])

export default router;