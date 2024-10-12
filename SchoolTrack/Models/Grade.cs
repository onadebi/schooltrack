using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolTrack.Models;

[Table(nameof(Grade))]
public class Grade: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }


    public required int Level { get; set; }

    #region Relationships
    public ICollection<SchoolClass> GradeClass { get; set; } = [];
    public ICollection<Student> Students { get; set; } = [];
    #endregion

}
