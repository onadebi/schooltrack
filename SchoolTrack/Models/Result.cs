using SchoolTrack.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolTrack.Models;

[Table(nameof(Result))]
public class Result: CommonEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    public int Score { get; set; }

    public int TotalOverall{ get; set; }

    public ResultTypeEnum ResultType { get; set; }


    #region Relationships
    public long? ExamId { get; set; }
    public Exam? ExamResult { get; set; }

    public long? AssignmentId { get; set; }
    public Assignment? AssignmentResult { get; set; }



    //public int SubjectId { get; set; }
    //public Subject SubjectStudentResult { get; set; }

    public long StudentId { get; set; }
    public Student? StudentResult { get; set; }

    //public int TeacherId { get; set; }
    //public Teacher Teacher{ get; set; }


    //public int ClassId { get; set; }
    //public SchoolClass SchoolClass { get; set; }
    #endregion

    // public Result(Student studentResult)
    // {
    //     StudentResult = studentResult;
    // }
}
