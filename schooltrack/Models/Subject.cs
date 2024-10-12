using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolTrack.Models;

[Table(nameof(Subject))]
public class Subject: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public required string SubjectName { get; set; }

    #region Relationships
    public virtual ICollection<Teacher> Teachers { get; set; } = [];

    public virtual ICollection<Lesson> Lessons { get; set; } = [];
    #endregion
}
