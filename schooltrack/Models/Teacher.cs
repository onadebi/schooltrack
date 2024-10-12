using SchoolTrack.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolTrack.Models;

[Table(nameof(Teacher))]
public class Teacher: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public required string Username { get; set; }

    public required string FirstName { get; set; }


    public required string LastName { get; set; }

    [Column(TypeName = "varchar(250)")]
    public string? Email { get; set; }

    public string? Phone { get; set; }

    [Column(TypeName = "varchar(500)")]
    public required string Address { get; set; }

    public DateTime DateOfBirth { get; set; }

    public DateTime DateEmployed { get; set; }

    public string? Image { get; set; }

    [Column(TypeName = "varchar(20)")]
    public string? BloodType { get; set; }
    public GenderEnum Gender { get; set; }


    #region RElationships
    public ICollection<Subject> Subjects { get; set; } = [];

    public ICollection<Lesson> Lessons { get; set; } = [];

    public ICollection<SchoolClass> SchoolClasses { get; set; } = [];
    #endregion

}
