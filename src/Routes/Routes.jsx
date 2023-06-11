import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><ClassesPage></ClassesPage></PrivateRoute>
            },
            {
                path: 'instructors',
                element: <InstructorsPage></InstructorsPage>

            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <h1 className="text-7xl text-center mt-20">Dashboard</h1>
            },
            {
                path: '/dashboard/admin',
                element: <h1 className="text-7xl text-center mt-20">Admin Dashboard</h1>
            },
            {
                path: '/dashboard/instructor',
                element: <h1 className="text-7xl text-center mt-20">Instructor Dashboard</h1>
            },
            {
                path: '/dashboard/student',
                element: <h1 className="text-7xl text-center mt-20">Student Dashboard</h1>
            },
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
            },
            {
                path: '/dashboard/selectedClass',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://a12-server-eight.vercel.app/single_course_for_payment/${params.id}`)
            },
            {
                path: '/dashboard/enrolledClass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
        ]
    }
])

export default router;