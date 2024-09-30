import { createBrowserRouter } from "react-router-dom";
import Home from "../app/pages/Home";
import GeneralLayout from "../app/layouts/GeneralLayout";
import AdminLayout from "../app/layouts/AdminLayout";
import AppRoutes from "./AppRoutes";
import AdminPage from "../app/pages/dashboard/admin/AdminPage";
import { ClientPage } from "../app/pages/dashboard/client/ClientPage";
import SupervisorPage from "../app/pages/dashboard/supervisor/SupervisorPage";
import ParentPage from "../app/pages/dashboard/parent/ParentPage";
import Dashboard from "../app/pages/dashboard/Dashboard";
import StudentPage from "../app/pages/dashboard/client/StudentPage";
import TeacherPage from "../app/pages/dashboard/supervisor/TeacherPage";
import TeacherList from "../app/pages/dashboard/supervisor/TeacherList";
import StudentListPage from "../app/pages/dashboard/client/StudentListPage";
import ParentListPage from "../app/pages/dashboard/parent/ParentListPage";
import SubjectsPageList from "../app/pages/dashboard/subjects/SubjectsPageList";
import ClassesPage from "../app/pages/dashboard/classes/ClassesPage";
import LessonsPage from "../app/pages/dashboard/lessons/LessonsPage";
import ExamsPage from "../app/pages/dashboard/exams/ExamsPage";
import AssignmentsPage from "../app/pages/dashboard/assignments/AssignmentsPage";
import ResultsPage from "../app/pages/dashboard/results/ResultsPage";
import AttendancePage from "../app/pages/dashboard/attendance/AttendancePage";
import EventsPage from "../app/pages/events/EventsPage";
import MessagesPage from "../app/pages/dashboard/messages/MessagesPage";
import AnnouncementsPage from "../app/pages/dashboard/announcements/AnnouncementsPage";
import TeacherDetail from "../app/pages/dashboard/supervisor/TeacherDetail";
import StudentDetail from "../app/pages/dashboard/client/StudentDetail";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <GeneralLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]        
    },
    {
        path: '/dashboard',
        element: <AdminLayout/>,
        children :[
            {
                path: AppRoutes().dashboard.home.parentRoute,
                element: <Dashboard/>
            },
            {
                path: AppRoutes().dashboard.admin.parentRoute,
                element: <AdminPage/>
            },
            {
                path: AppRoutes().dashboard.client.parentRoute,
                element: <ClientPage/>
            },
            {
                path: AppRoutes().dashboard.students.parentRoute,
                element: <StudentListPage/>
            },
            {
                path: AppRoutes().dashboard.students.students.parentRoute,
                element: <StudentPage/>
            },
            {
                path: AppRoutes().dashboard.students.student.parentRoute,
                element: <StudentDetail/>
            },
            {
                path: AppRoutes().dashboard.students.student.parentRoute,
                element: <StudentPage/>
            },
            {
                path: AppRoutes().dashboard.teachers.teacher.parentRoute,
                element: <TeacherDetail/>
            },
            {
                path: AppRoutes().dashboard.teachers.teachers.parentRoute,
                element: <TeacherPage/>
            },
            {
                path: AppRoutes().dashboard.teachers.parentRoute,
                element: <TeacherList/>
            },
            {
                path: AppRoutes().dashboard.supervisor.parentRoute,
                element: <SupervisorPage/>
            },
            {
                path: AppRoutes().dashboard.parents.parentRoute,
                element: <ParentListPage/>
            },
            {
                path: AppRoutes().dashboard.parents.parents.parentRoute,
                element: <ParentPage/>
            },
            {
                path: AppRoutes().dashboard.parents.parent.parentRoute,
                element: <ParentPage/>
            },
            {
                path: AppRoutes().dashboard.subjects.parentRoute,
                element: <SubjectsPageList/>
            },
            {
                path: AppRoutes().dashboard.classes.parentRoute,
                element: <ClassesPage/>
            },
            {
                path: AppRoutes().dashboard.lessons.parentRoute,
                element: <LessonsPage/>
            },
            {
                path: AppRoutes().dashboard.exams.parentRoute,
                element: <ExamsPage/>
            },
            {
                path: AppRoutes().dashboard.assignments.parentRoute,
                element: <AssignmentsPage/>
            },
            {
                path: AppRoutes().dashboard.results.parentRoute,
                element: <ResultsPage/>
            },
            {
                path: AppRoutes().dashboard.attendance.parentRoute,
                element: <AttendancePage/>
            },
            {
                path: AppRoutes().dashboard.events.parentRoute,
                element: <EventsPage/>
            },
            {
                path: AppRoutes().dashboard.messages.parentRoute,
                element: <MessagesPage/>
            },
            {
                path: AppRoutes().dashboard.announcements.parentRoute,
                element: <AnnouncementsPage/>
            },
        ]
    },
    {
        path: '*',
        element: <>Not FOund</>
    },

]);

export default AppRouter;