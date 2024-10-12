using SchoolTrack.Models.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolTrack.Models;

[Table(nameof(Student))]
public class Student: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public required string Username { get; set; }

    public required string FirstName { get; set; }


    public required string LastName { get; set; }

    [Column(TypeName = "varchar(250)")]
    public string? Email { get; set; }

    public string? Phone { get; set; }

    [Column(TypeName = "varchar(500)")]
    public required string Address { get; set; }

    public DateTime DateOfBirth { get; set; }

    public string? Image { get; set; }

    [Column(TypeName = "varchar(20)")]
    public string? BloodType { get; set; }
    public GenderEnum Gender { get; set; }


    #region Relationships
    public long ParentId { get; set; }
    // There would be a primary parent and other parents/guardians
    public Parent? Parent { get; set; }

    public int ClassId { get; set; }
    public SchoolClass? StudentClass { get; set; }

    public int GradeId { get; set; }
    public Grade? StudentGrade { get; set; }

    public ICollection<Attendance> Attendances { get; set; } = [];
    public ICollection<Result> StudentResults { get; set; } = [];
    #endregion

    // public Student(Parent studentParent, SchoolClass studentClass, Grade studentGrade)
    // {
    //     Parent = studentParent;
    //     StudentClass = studentClass;
    //     StudentGrade = studentGrade;
    // }
}
