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
            teachers:{
                name: "Teachers",
                parentRoute: "/dashboard/allteachers",                
                teachers:{
                    name: "Teacher",
                    parentRoute: "/dashboard/teachers"
                },
                teacher:{
                    name: "Teacher",
                    parentRoute: "/dashboard/teacher/:id"
                },
            },
            client: {
                name: "Client",
                parentRoute: "/dashboard/client"
            },
            students: {
                name: "Student",
                parentRoute: "/dashboard/allstudents",
                students:{
                    name: "student",
                    parentRoute: "/dashboard/students"
                },
                student:{
                    name: "student",
                    parentRoute: "/dashboard/student/:id"
                }
            },
            parents: {
                name: "Parent",
                parentRoute: "/dashboard/allparents",
                parents:{
                    name: "parent",
                    parentRoute: "/dashboard/parents"
                },
                parent:{
                    name: "parent",
                    parentRoute: "/dashboard/parent/:id"
                }
            },
            subjects: {
                name: "Subject",
                parentRoute: "/dashboard/subjects",
            },
            classes: {
                name: "Classes",
                parentRoute: "/dashboard/classess",
            },
            lessons: {
                name: "Lessons",
                parentRoute: "/dashboard/lessons",
            },
            exams: {
                name: "Exams",
                parentRoute: "/dashboard/exams",
            },
            assignments: {
                name: "Assignments",
                parentRoute: "/dashboard/assignments",
            },
            results: {
                name: "results",
                parentRoute: "/dashboard/results",
            },
            attendance: {
                name: "attendance",
                parentRoute: "/dashboard/attendance",
            },
            events: {
                name: "events",
                parentRoute: "/dashboard/events",
            },
            messages: {
                name: "messages",
                parentRoute: "/dashboard/messages",
            },
            announcements: {
                name: "announcements",
                parentRoute: "/dashboard/announcements",
            },
        },
        notFound:{
            name: "Not Found",
            parentRoute: "/not-found"
        }
    }
}

export default AppRoutes;