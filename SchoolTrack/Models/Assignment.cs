using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolTrack.Models;

[Table(nameof(Assignment))]
public class Assignment : CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public required string Title { get; set; }

    public required DateTime StartDate { get; set; }
    public required DateTime DueDate { get; set; }

    #region Relationships
    public long LessonId { get; set; }
    public Lesson? Lesson { get; set; }

    public ICollection<Result> AssignmentResults { get; set; } = [];
    #endregion

    // public Assignment(Lesson lesson)
    // {
    //     Lesson = lesson;
    // }
}
