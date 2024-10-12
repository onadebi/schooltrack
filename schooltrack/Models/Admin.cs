using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using SchoolTrack.Models.Enums;


namespace SchoolTrack.Models;

[Table("Admin")]
public class Admin: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public required string Username { get; set; }

    public RolesEnum[] Roles { get; set; } =[];
}
