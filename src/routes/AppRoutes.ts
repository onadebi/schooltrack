const AppRoutes = () => {
    return {
        home: {
            name: "Home",
            parentRoute: "/"
        },
        dashboard: {
            home: {
                name: "Dashboard",
                parentRoute: "/dashboard/home"
            },
            admin: {
                name: "Admin",
                parentRoute: "/dashboard/admin"
            },
            supervisor: {
                name: "Supervisor",
                parentRoute: "/dashboard/supervisor"
            },
            teacher:{
                teacherPage:{
                    name: "Teacher",
                    parentRoute: "/dashboard/teacher"
                },
                list:{
                    name: "Teachers",
                    parentRoute: "/dashboard/list/teachers"
                }
            },
            client: {
                name: "Client",
                parentRoute: "/dashboard/client"
            },
            student: {
                name: "Student",
                parentRoute: "/dashboard/student",
                list:{
                    name: "student",
                    parentRoute: "/dashboard/list/students"
                }
            },
            parent: {
                name: "Parent",
                parentRoute: "/dashboard/parent",
                list:{
                    name: "parent",
                    parentRoute: "/dashboard/list/parents"
                }
            },
            subjects: {
                name: "Subject",
                parentRoute: "/dashboard/subjects",
            },
        },
        notFound:{
            name: "Not Found",
            parentRoute: "/not-found"
        }
    }
}

export default AppRoutes;