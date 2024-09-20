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
            client: {
                name: "Client",
                parentRoute: "/dashboard/client"
            },
            parent: {
                name: "Parent",
                parentRoute: "/dashboard/parent"
            },
        }
    }
}

export default AppRoutes;