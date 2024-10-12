using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolTrack.Models;

[Table(nameof(SchoolClass))]
public class SchoolClass: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    public required string Name { get; set; }

    [Required]
    public int Capacity { get; set; }


    #region Relationships

    public int? SupervisorId { get; set; }
    public Teacher? Supervisor { get; set; }

    public ICollection<Lesson> ClassLessons { get; set; } = [];

    public ICollection<Student> ClassStudents { get; set; } = [];

    public int GradeId { get; set; }
    public Grade? ClassGrade { get; set; }

    public ICollection<SchoolEvent> ClassEvents { get; set; } = [];
    public ICollection<Announcement> ClassAnnoucements { get; set; } = [];
    #endregion

    //public SchoolClass(string name, int capacity, Grade classGrade)
    //{
    //    Name = name;
    //    Capacity = capacity;
    //    ClassGrade = classGrade;
    //}
}
