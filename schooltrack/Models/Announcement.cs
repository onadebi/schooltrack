using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolTrack.Models;

[Table(nameof(Announcement))]
public class Announcement : CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public required string Title { get; set; }

    public required string Description { get; set; }

    public required DateTime Date { get; set; }

    #region Relationships
    public int? SchoolClassId { get; set; }
    public SchoolClass? SchoolClassEvent { get; set; }
    #endregion
}
