using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolTrack.Models;

[Table(nameof(Exam))]
public class Exam: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public required string Title { get; set; }

    public required DateTime StartTime { get; set; }
    public required DateTime EndTime { get; set; }


    #region Relationships
    public long ExamLessonId { get; set; }
    public Lesson? LessonExam { get; set; }

    public ICollection<Result> ExamResults { get; set; } = [];
    #endregion

    // public Exam(Lesson lesson)
    // {
    //     LessonExam = lesson;
    // }

}
