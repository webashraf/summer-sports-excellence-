import axios from "axios";
import { useEffect, useState } from "react";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    // console.log('isAdmin', isAdmin);

    const { user, loading } = useAuth();
    const [admin, setAdmin] = useState(null);
    const [instructor, setInstructor] = useState(null);
    const [student, setStudent] = useState(null);

    console.log(admin, instructor?.instructor, student?.student);

    useEffect(() => {
        axios.get(`https://a12-server-eight.vercel.app/isInstructor/${user?.email}`)
            .then(res => {
                setInstructor(res.data);
                if (res.data?.instructor) {
                    setAdmin(false);
                    setStudent(false);
                }
            });
    }, [user]);    
    useEffect(() => {
        axios.get(`https://a12-server-eight.vercel.app/isUser/${user?.email}`)
            .then(res => {
                setStudent(res.data);
                if (res.data?.instructor) {
                    setAdmin(false);
                    setInstructor(false);
                }
            });
    }, [user]);

    useEffect(() => {
        if (isAdmin) {
            setStudent(false);
            setInstructor(false);
        }
    }, [isAdminLoading, isAdmin]);
    return (
        <div className="text-7xl font-serif text-center pt-10">
            {admin?.admin && <h1>Admin Dashboard</h1>}
            {instructor?.instructor && <h1>Instructor Dashboard</h1>}
            {student?.student && <h1>Student Dashboard</h1>}
        </div>
    );
};

export default DashboardHome;