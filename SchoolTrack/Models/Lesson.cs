using SchoolTrack.Models.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolTrack.Models;

[Table(nameof(Lesson))]
public class Lesson: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    [Required(ErrorMessage = "Lesson name is required")]
    public required string LessonName { get; set; }

    public DaysForWork Day { get; set; }

    public DateTime StartTime { get; set; }

    public DateTime EndTime { get; set; }

    #region Relationships

    public int SubjectId { get; set; }
    public Subject? SubjectLesson { get; set; }


    public int ClassId { get; set; }
    public SchoolClass? LessonClass { get; set; }


    public int TeacherId { get; set; }
    public Teacher? Teacher { get; set; }

    public ICollection<Exam> LessonExams { get; set; } = [];

    public ICollection<Assignment> LessonAssignments { get; set; } = [];

    public ICollection<Attendance> LessonAttendance { get; set; } = [];
    #endregion

    // public Lesson(Subject subjectLesson, SchoolClass lessonClass, Teacher teacher)
    // {
    //     SubjectLesson = subjectLesson;
    //     LessonClass = lessonClass;
    //     Teacher = teacher;
    // }
}
