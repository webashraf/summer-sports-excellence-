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
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";


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
                loader: ({ params }) => fetch(`http://localhost:5000/single_course_for_payment/${params.id}`)
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