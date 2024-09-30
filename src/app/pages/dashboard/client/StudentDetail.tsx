import React from "react";
import { Link, useParams } from "react-router-dom";
import BigCalendar from "../../../../components/BigCalendar";
import Announcements from "../../../../components/Announcements";
import PerformanceChart from "../../../../components/PerformanceChart";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/RootReducer";
import { StudentsInfoType, studentsInitData } from "../../../models/dto/StudentInfoType";
import MetaTag from "../../../../components/MetaTag";

interface IProps{
  image: string;
  scoreValue: string;
  title: string;
}
const StudentNotes: React.FC<IProps> =({image, scoreValue, title})=>{
  return (
      <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
        <img src={image} alt="" title={title} width={24} height={24} className="w-6 h-6"/>
        <div className="flex flex-col">
          <h3 className="font-semibold">{scoreValue}</h3>
          <span className="text-xs text-gray-500 font-semibold">{title}</span>
        </div>
      </div>
  )
}

const sideBarItems: IProps[] = [
  {
    image: '/images/singleAttendance.png',
    scoreValue: '90%',
    title: 'Attendance'
  },
  {
    image: '/images/singleBranch.png',
    scoreValue: '2',
    title: 'Branches'
  },
  {
    image: '/images/singleLesson.png',
    scoreValue: '6',
    title: 'Lessons'
  },
  {
    image: '/images/singleClass.png',
    scoreValue: '6',
    title: 'Classes'
  },

]

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = React.useState<StudentsInfoType|undefined>(studentsInitData[0]);
  const studentData = useSelector((state: RootState) => state.students.find((student) => student.id === (Number.isNaN(Number(id)) ? 0 : Number(id))));

  React.useEffect(()=>{
    setStudent(studentData);
  },[studentData])
  return (
    <>
    <MetaTag title={`Student: ${student?.name}`} description={`Student details for ${student?.name}`} />
    <div className="flex flex-1 p-4 flex-col gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Card */}
          <div className="bg-onaxSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <img src={`${student?.photo}`} width={144} height={144} title={student?.name} className="rounded-full lg:w-32 lg:h-32 object-cover"/>
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
                <h2 className="font-semibold text-gray-700">{student?.name} ({student?.studentId})</h2>
                <section>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem provident explicabo 
                </section>
                <div className="flex flex-col gap-4">
                    <div id="academic" className="flex flex-col justify-between gap-4 md:flex-row">
                        <section className="flex items-center gap-2">
                          <img src={`/images/blood.png`} alt="Academic" title="Academic" width={14} height={14}/>
                          <span className="text-sm">{`A+`}</span>
                        </section>
                        <section className="flex items-center gap-2">
                          <img src={`/images/date.png`} alt="Academic" title="Academic" width={14} height={14}/>
                          <span className="text-sm">{new Date().toISOString().split('T')[0]}</span>
                        </section>
                    </div>
                    <div id="contactDetails" className="flex flex-col justify-between gap-4 md:flex-row">
                        <section className="flex items-center gap-2">
                          <img src={`/images/mail.png`} alt="Academic" title="Academic" width={14} height={14}/>
                          <span className="text-sm">{student?.email}</span>
                        </section>
                        <section className="flex items-center gap-2">
                          <img src={`/images/phone.png`} alt="Academic" title="Academic" width={14} height={14}/>
                          <span className="text-sm whitespace-nowrap">{student?.phone}</span>
                        </section>
                    </div>
                </div>
            </div>        
          </div>
          {/* Small cards */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {sideBarItems && sideBarItems.map((item, index) =>(
              <StudentNotes key={index} image={item.image} scoreValue={item.scoreValue} title={item.title}/>
            ))}
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rounded-md p-4">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar  />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
              <Link className="p-3 rounded-md bg-onaxYellowLight" to={``}>Student's Lessons</Link>
              <Link className="p-3 rounded-md bg-onaxSkyLight" to={``}>Student's Teachers</Link>
              <Link className="p-3 rounded-md bg-pink-50" to={``}>Student's Exams</Link>
              <Link className="p-3 rounded-md bg-onaxSkyLight" to={``}>Student's Assignments</Link>
              <Link className="p-3 rounded-md bg-onaxPurple" to={``}>Student's Results</Link>
          </div>
        </div>
        <PerformanceChart />
      <Announcements/>    
      </div>
    </div>
    </>
  );
};

export default StudentDetail;