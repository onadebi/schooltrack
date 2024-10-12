using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolTrack.Models;

[Table(nameof(Attendance))]
public class Attendance: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public required DateTime Date { get; set; }

    public bool IsPresent { get; set; }

    #region Relationships
    public long StudentId { get; set; }
    public Student? StudentAttendance { get; set; }

    public long LessonIdAttendance { get; set; }
    public Lesson? LessonAttendance { get; set; }
    #endregion

    // public Attendance(Student student, Lesson lesson)
    // {
    //     StudentAttendance = student;
    //     LessonAttendance = lesson;
    // }
}
