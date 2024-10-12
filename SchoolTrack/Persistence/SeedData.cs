using Microsoft.OpenApi.Any;
using SchoolTrack.Models;
using SchoolTrack.Models.Enums;
using System.Xml.Linq;

namespace SchoolTrack.Persistence;

#region SeedData
public static class SeedData
{
    private static readonly List<Subject> subjectData = [
            new Subject{ SubjectName= "Mathematics"},
            new Subject{ SubjectName= "Science"},
            new Subject{ SubjectName= "English"},
            new Subject{ SubjectName= "History"},
            new Subject{ SubjectName= "Geography"},
            new Subject{ SubjectName= "Physics"},
            new Subject{ SubjectName= "Chemistry"},
            new Subject{ SubjectName= "Biology"},
            new Subject{ SubjectName= "Computer Science"},
            new Subject{ SubjectName= "Art"},
    ];

    public static List<Admin> AdminCreate()
    {
        return new List<Admin>
        {
            new Admin
            {
                Username = "admin",
                Roles = [RolesEnum.Admin, RolesEnum.Teacher, RolesEnum.Student, RolesEnum.Parent],
            },
            new Admin
            {
                Username = "admin2",
                Roles = [RolesEnum.Admin, RolesEnum.Teacher, RolesEnum.Student, RolesEnum.Parent],
            }
        };
    }

    public static List<Grade> Grade_SeedData()
    {
        var grades = new List<Grade>();
        Enumerable.Range(1, 6).ToList().ForEach((level) =>
        {
            grades.Add(new Grade
            {
                Level = level
            });
        });
        return grades;
    }

    public static List<SchoolClass> SchoolClass_SeedData()
    {
        var schoolClasses = new List<SchoolClass>();
        Enumerable.Range(1, 6).ToList().ForEach(i =>
        {
            double valz = Math.Floor(new Random().NextDouble() * 10) + 15;
            schoolClasses.Add(new SchoolClass
            {
                Name = $"{i}A",
                Capacity = Convert.ToInt32(valz),
                ClassGrade = new Grade { Level = i }
            });
        });
        return schoolClasses;
    }
    public static List<Subject> Subject_SeedData() => subjectData;

    public static List<Teacher> Teacher_SeedData()
    {
        var teachersList = new List<Teacher>();
        Enumerable.Range(1, 15).ToList().ForEach(i =>
        {
            teachersList.Add(new Teacher
            {
                Username = $"teacher{i}",
                FirstName = $"TFName-{i}",
                LastName = $"TLName-{i}",
                Email = $"teacher{i}@onaxsys.com",
                Phone = $"647-456-789{i}",
                Address = $"Address-{i}",
                DateOfBirth = DateTime.UtcNow.AddYears(-30).AddDays(i),
                DateEmployed = DateTime.UtcNow.AddYears(-i).AddDays(i),
                BloodType = (i % 2 == 0) ? "O+" : "A+",
                Gender = (i % 2 == 0) ? GenderEnum.Male : GenderEnum.Female,
                Subjects = [subjectData [i % 10]],
            });
        });
        return teachersList;
    }

    public static List<Lesson> Lessons_SeedData()
    {
        var lessons = new List<Lesson>();
        Enumerable.Range(1, 30).ToList().ForEach(i =>
        {
            lessons.Add(new Lesson
            {
                LessonName = $"Lesson-{i}",
                Day = Enum.Parse<DaysForWork>(new Random().Next(0, 5).ToString()),
                StartTime = DateTime.UtcNow.AddHours(8),
                EndTime = DateTime.UtcNow.AddHours(10),
                SubjectId = (i % 10) + 1,
                ClassId = (i % 6) + 1,
                TeacherId = (i % 15) + 1
            });
        });
        return lessons;
    }

    public static List<Parent> Parents_SeedData()
    {
        var parents = new List<Parent>();
        Enumerable.Range(1, 25).ToList().ForEach(i =>
        {
            parents.Add(new Parent
            {
                Username = $"parent{i}",
                FirstName = $"PFName-{i}",
                LastName = $"PLName-{i}",
                Email = $"parent{i}@onaxsys.com",
                Phone = $"647-456-789{i}",
                Address = $"Address-{i}",
                ParentType = (i % 2 == 0) ? ParentTypeEnum.Father : ParentTypeEnum.Mother
            });
        });
        return parents;
    }

    public static List<Student> Students_SeedData()
    {
        var students = new List<Student>();

        Enumerable.Range(1, 50).ToList().ForEach(i =>
        {
            students.Add(new Student
            {
                FirstName = $"SFName-{i}",
                LastName = $"SLName-{i}",
                Username = $"student{i}",
                Email = $"student{i}@onaxsys.com",
                Phone = $"647-456-789{i}",
                Address = $"Address-{i}",
                DateOfBirth = DateTime.UtcNow.AddYears(-15).AddDays(i),
                BloodType = (i % 2 == 0) ? (i % 6 == 0) ? "A+" : "O+" : "B+",
                Gender = (i % 2 == 0) ? (i % 6 == 0) ? GenderEnum.Male : GenderEnum.Female : GenderEnum.Female,
                ParentId = Convert.ToInt64(Math.Ceiling(i / 2f) % 25) == 0 ? 25 : Convert.ToInt64(Math.Ceiling(i / 2f) % 25),
                GradeId = (i % 6) + 1,
                ClassId = (i % 6) + 1
            });
        });
        return students;
    }

    public static List<Exam> Exams_SeedData()
    {
        var exams = new List<Exam>();

        Enumerable.Range(1, 10).ToList().ForEach(i =>
        {
            exams.Add(new Exam
            {
                Title = $"Exam-{i}",
                StartTime = DateTime.UtcNow.AddHours(8),
                EndTime = DateTime.UtcNow.AddHours(10),
                ExamLessonId = (i % 30) + 1,
            });
        });
        return exams;
    }

    public static List<Assignment> Assignments_SeedData()
    {
        var assignments = new List<Assignment>();

        Enumerable.Range(1, 10).ToList().ForEach(i =>
        {
            assignments.Add(new Assignment
            {
                Title = $"Assignment-{i}",
                StartDate = DateTime.UtcNow.AddHours(8),
                DueDate = DateTime.UtcNow.AddHours(10),
                LessonId = (i % 30) + 1,
            });
        });
        return assignments;
    }

    public static List<Result> Results_SeedData()
    {
        var results = new List<Result>();

        Enumerable.Range(1, 10).ToList().ForEach(i =>
        {
            results.Add(new Result
            {
                Score = i * 10 < 49 ? 55 : i * 10,
                TotalOverall = 100,
                ResultType = (i % 2 == 0 && i % 3 == 0) ? ResultTypeEnum.Exam : ResultTypeEnum.Assignment,
                ExamId = (i % 2 == 0 && i % 3 == 0) ? i : null,
                AssignmentId = (i % 2 != 0 && i % 3 != 0) ? null : i,
                StudentId = (i % 2 == 0) ? i : 50 - i
            });
        });
        return results;
    }

    public static List<Attendance> Attendances_SeedData()
    {
        var attendances = new List<Attendance>();

        Enumerable.Range(1, 10).ToList().ForEach(i =>
        {
            attendances.Add(new Attendance
            {
                Date = DateTime.UtcNow.AddDays(-i),
                IsPresent = true,
                StudentId = (i % 2 == 0) ? i : 50 - i,
                LessonIdAttendance = (i % 30) + 1,
            });
        });
        return attendances;
    }

    public static List<SchoolEvent> SchoolEvents_SeedData()
    {
        var schoolEvents = new List<SchoolEvent>();

        Enumerable.Range(1, 6).ToList().ForEach(i =>
        {
            schoolEvents.Add(new SchoolEvent
            {
                Title = $"Event-{i}",
                Description = $"Description for event-{i}",
                StartTime = DateTime.UtcNow.AddHours(12),
                EndTime = DateTime.UtcNow.AddHours(14),
                ClassEventId = (i % 6) + 1,
            });
        });
        return schoolEvents;
    }
   
    public static List<Announcement> Announcements_SeedData()
    {
        var announcements = new List<Announcement>();

        Enumerable.Range(1, 6).ToList().ForEach(i =>
        {
            announcements.Add(new Announcement
            {
                Title = $"Announcement-{i}",
                Description = $"Description for Announcement-{i}",
               Date = DateTime.UtcNow.AddDays(i),
               SchoolClassId = (i % 6) + 1,
            });
        });
        return announcements;
    }




}
#endregion

public static class DBInitializers
{
    public static async Task SeedDefaultsData(this IHost host)
    {
        var serviceProvider = host.Services.CreateScope().ServiceProvider;
        var context = serviceProvider.GetRequiredService<AppDbContext>();

        if (!context.Admins.Any())
        {
            await context.Admins.AddRangeAsync(SeedData.AdminCreate());
        }

        if (!context.Grades.Any())
        {
            await context.Grades.AddRangeAsync(SeedData.Grade_SeedData());
            await context.SaveChangesAsync();
        }
        if (!context.SchoolClasses.Any())
        {
            await context.SchoolClasses.AddRangeAsync(SeedData.SchoolClass_SeedData());
            await context.SaveChangesAsync();
        }

        if (!context.Subjects.Any())
        {
            await context.Subjects.AddRangeAsync(SeedData.Subject_SeedData());
            await context.SaveChangesAsync();
        }
        if (!context.Teachers.Any())
        {
            await context.Teachers.AddRangeAsync(SeedData.Teacher_SeedData());
            await context.SaveChangesAsync();
        }
        if (!context.Lessons.Any())
        {
            await context.Lessons.AddRangeAsync(SeedData.Lessons_SeedData());
            await context.SaveChangesAsync();
        }

        if (!context.Parents.Any())
        {
            await context.Parents.AddRangeAsync(SeedData.Parents_SeedData());
            await context.SaveChangesAsync();
        }

        if (!context.Students.Any())
        {
            await context.Students.AddRangeAsync(SeedData.Students_SeedData());
            await context.SaveChangesAsync();
        }

        if (!context.Exams.Any())
        {
            await context.Exams.AddRangeAsync(SeedData.Exams_SeedData());
            await context.SaveChangesAsync();
        }
        if (!context.Assignments.Any())
        {
            await context.Assignments.AddRangeAsync(SeedData.Assignments_SeedData());
            await context.SaveChangesAsync();
        }
        if (!context.Results.Any())
        {
            await context.Results.AddRangeAsync(SeedData.Results_SeedData());
            await context.SaveChangesAsync();
        }
        if (!context.Attendances.Any())
        {
            await context.Attendances.AddRangeAsync(SeedData.Attendances_SeedData());
            await context.SaveChangesAsync();
        }
        if (!context.SchoolEvents.Any())
        {
            await context.SchoolEvents.AddRangeAsync(SeedData.SchoolEvents_SeedData());
            await context.SaveChangesAsync();
        }
        if (!context.Announcements.Any())
        {
            await context.Announcements.AddRangeAsync(SeedData.Announcements_SeedData());
            await context.SaveChangesAsync();
        }

        if (context.ChangeTracker.HasChanges())
        {
            await context.SaveChangesAsync();
        }
    }
}
