import { NavLink } from "react-router-dom";
import { role } from "../app/data/lib/data";
import AppRoutes from "../routes/AppRoutes";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/images/home.png",
        label: "Home",
        href: AppRoutes().dashboard.home.parentRoute,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/teacher.png",
        label: "Teachers",
        href: AppRoutes().dashboard.teachers.parentRoute,
        visible: ["admin", "teacher"],
      },
      {
        icon: "/images/student.png",
        label: "Students",
        href: AppRoutes().dashboard.students.parentRoute,
        visible: ["admin", "teacher"],
      },
      {
        icon: "/images/parent.png",
        label: "Parents",
        href: AppRoutes().dashboard.parents.parentRoute,
        visible: ["admin", "teacher"],
      },
      {
        icon: "/images/subject.png",
        label: "Subjects",
        href: AppRoutes().dashboard.subjects.parentRoute,
        visible: ["admin"],
      },
      {
        icon: "/images/class.png",
        label: "Classes",
        href: AppRoutes().dashboard.classes.parentRoute,
        visible: ["admin", "teacher"],
      },
      {
        icon: "/images/lesson.png",
        label: "Lessons",
        href: AppRoutes().dashboard.lessons.parentRoute,
        visible: ["admin", "teacher"],
      },
      {
        icon: "/images/exam.png",
        label: "Exams",
        href: AppRoutes().dashboard.exams.parentRoute,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/assignment.png",
        label: "Assignments",
        href: AppRoutes().dashboard.assignments.parentRoute,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/result.png",
        label: "Results",
        href: AppRoutes().dashboard.results.parentRoute,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/attendance.png",
        label: "Attendance",
        href: AppRoutes().dashboard.attendance.parentRoute,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/calendar.png",
        label: "Events",
        href: AppRoutes().dashboard.events.parentRoute,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/message.png",
        label: "Messages",
        href: AppRoutes().dashboard.messages.parentRoute,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/announcement.png",
        label: "Announcements",
        href: AppRoutes().dashboard.announcements.parentRoute,
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/images/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu: React.FC = () => {
  return (
    <div className="">
      {menuItems.map((menu) => (
        <div className="" key={menu.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{menu.title}</span>
          {menu.items.map((item, index) => {
            if(item.visible.includes(role)) {
              return (
                <NavLink to={item.href} className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 py-2 md:px-2 rounded-md hover:bg-onaxSky" key={index}>
                  <img src={item.icon} alt={item.label} title={item.label} width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </NavLink>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
