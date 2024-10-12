using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolTrack.Models;

[Table(nameof(SchoolEvent))]
public class SchoolEvent: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public required string Title { get; set; }

    public required string Description { get; set; }

    public required DateTime StartTime { get; set; }
    public required DateTime EndTime { get; set; }

    #region Relationships
    public int? ClassEventId { get; set; }
    public SchoolClass? ClassEvent { get; set; }
    #endregion
}
