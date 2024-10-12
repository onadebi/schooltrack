using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SchoolTrack.Models.Enums;

namespace SchoolTrack.Models;

public class Parent: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public required string Username { get; set; }

    public required string FirstName { get; set; }

    public required ParentTypeEnum ParentType { get; set; }
    public required string LastName { get; set; }

    [Column(TypeName = "varchar(250)")]
    public string? Email { get; set; }

    public string? Phone { get; set; }

    [Column(TypeName = "varchar(500)")]
    public required string Address { get; set; }

    #region relationships
    public ICollection<Student> Students { get; set; } = new HashSet<Student>();

    #endregion
}
