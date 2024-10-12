using Microsoft.EntityFrameworkCore;
using SchoolTrack.Models;

namespace SchoolTrack.Persistence.ModelBuilders
{
    public static class AppFluentBuilder
    {
        public static ModelBuilder SeedBuilder(this ModelBuilder model)
        {
            model.Entity<Admin>(props =>
            {
                props.HasIndex(p => p.Username, name: "ix_unique_admin_username").IsUnique();
            });
            model.Entity<Teacher>(props =>
            {
                props.HasIndex(p => p.Username, name: "ix_unique_teacher_username").IsUnique();
                props.HasIndex(p => p.Email, name: "ix_unique_teacher_email").IsUnique();
                props.HasMany<Subject>((Teacher s) => s.Subjects)
                    .WithMany((Subject s) => s.Teachers);
                //.HasForeignKey((Subject s) => s.TeacherId)
                //.OnDelete(DeleteBehavior.Restrict);

                props.HasMany<Lesson>(s => s.Lessons)
                .WithOne(s => s.Teacher)
                    .HasForeignKey(s => s.TeacherId)
                    .OnDelete(DeleteBehavior.Restrict);

                props.HasMany<SchoolClass>(t => t.SchoolClasses)
                .WithOne(s => s.Supervisor)
                .HasForeignKey(s => s.SupervisorId).OnDelete(DeleteBehavior.Restrict);
            });
            model.Entity<Parent>(prop =>
            {
                prop.HasIndex(p => p.Username, name: "ix_unique_parent_username").IsUnique();
                prop.HasMany<Student>((Parent s)=> s.Students)
                    .WithOne((s) => s.Parent)
                    .HasForeignKey((s) => s.ParentId)
                    .OnDelete(DeleteBehavior.Restrict);
            });
            model.Entity<Student>(props =>
            {
                props.HasIndex(p => p.Username,name:"ix_unique_student_username" ).IsUnique();

                props.HasMany<Attendance>((Student s) => s.Attendances)
                .WithOne((Attendance s) => s.StudentAttendance)
                    .HasForeignKey((Attendance s) => s.StudentId)
                    .OnDelete(DeleteBehavior.Restrict);

                props.HasMany<Result>((Student s) => s.StudentResults)
                .WithOne((Result s) => s.StudentResult)
                    .HasForeignKey((Result s) => s.StudentId)
                    .OnDelete(DeleteBehavior.Restrict);
            });


            model.Entity<Subject>(props =>
            {
                props.HasMany<Lesson>((Subject s) => s.Lessons)
                    .WithOne((Lesson s) => s.SubjectLesson)
                    .HasForeignKey((Lesson s) => s.SubjectId)
                    .OnDelete(DeleteBehavior.Restrict);
            });

            model.Entity<SchoolClass>(props =>
            {
                props.HasMany<Lesson>((SchoolClass s) => s.ClassLessons)
                    .WithOne((Lesson s) => s.LessonClass)
                    .HasForeignKey((Lesson s) => s.ClassId)
                    .OnDelete(DeleteBehavior.Restrict);

                props.HasMany<Student>((SchoolClass s) => s.ClassStudents)
                .WithOne((Student s) => s.StudentClass)
                .HasForeignKey((Student s) => s.ClassId)
                .OnDelete(DeleteBehavior.Restrict);

                props.HasMany<Announcement>((SchoolClass s) => s.ClassAnnoucements)
                .WithOne((Announcement s) => s.SchoolClassEvent)
                .HasForeignKey((Announcement s) => s.SchoolClassId)
                .OnDelete(DeleteBehavior.Restrict);

                props.HasMany<SchoolEvent>((SchoolClass s) => s.ClassEvents)
                .WithOne((SchoolEvent s) => s.ClassEvent)
                .HasForeignKey((SchoolEvent s) => s.ClassEventId)
                .OnDelete(DeleteBehavior.Restrict);
            });

            model.Entity<Grade>(props =>
            {
                props.HasMany<SchoolClass>((Grade s) => s.GradeClass)
                    .WithOne((SchoolClass s) => s.ClassGrade)
                    .HasForeignKey((SchoolClass s) => s.GradeId)
                    .OnDelete(DeleteBehavior.Restrict);

                props.HasMany<Student>((Grade s) => s.Students)
                .WithOne((Student s) => s.StudentGrade)
                    .HasForeignKey((Student s) => s.GradeId)
                    .OnDelete(DeleteBehavior.Restrict);

            });

            model.Entity<Exam>(props =>
            {
                props.HasMany<Result>((Exam s) => s.ExamResults)
                    .WithOne((Result s) => s.ExamResult)
                    .HasForeignKey((Result s) => s.ExamId)
                    .OnDelete(DeleteBehavior.Restrict); 
            });

            model.Entity<Assignment>(props =>
            {
                props.HasMany<Result>((Assignment s) => s.AssignmentResults)
                    .WithOne((Result s) => s.AssignmentResult)
                    .HasForeignKey((Result s) => s.AssignmentId)
                    .OnDelete(DeleteBehavior.Restrict);
            });


            model.Entity<Lesson>(props =>
            {
                props.HasMany<Assignment>((Lesson s) => s.LessonAssignments)
                    .WithOne((Assignment s) => s.Lesson)
                    .HasForeignKey((Assignment s) => s.LessonId)
                    .OnDelete(DeleteBehavior.Restrict);

                props.HasMany<Attendance>((Lesson l) => l.LessonAttendance)
                    .WithOne((Attendance a) => a.LessonAttendance)
                    .HasForeignKey((Attendance a) => a.LessonIdAttendance)
                    .OnDelete(DeleteBehavior.Restrict);

                props.HasMany<Exam>((Lesson l) => l.LessonExams)
                    .WithOne((Exam m) => m.LessonExam)
                    .HasForeignKey((Exam m) => m.ExamLessonId)
                    .OnDelete(DeleteBehavior.Restrict);
            });

            //model.Entity<Attendance>(props =>
            //{
            //    props.HasMany<Assignment>((Lesson s) => s.LessonAssignments)
            //        .WithOne((Assignment s) => s.Lesson)
            //        .HasForeignKey((Assignment s) => s.LessonId)
            //        .OnDelete(DeleteBehavior.Restrict);
            //});

            return model;
        }
    }
}
