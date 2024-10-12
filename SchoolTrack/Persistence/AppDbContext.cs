using Microsoft.EntityFrameworkCore;
using SchoolTrack.Models;
using SchoolTrack.Persistence.ModelBuilders;

namespace SchoolTrack.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
        modelBuilder.SeedBuilder();
        base.OnModelCreating(modelBuilder);
    }

    public DbSet<Admin> Admins { get; set; }
    public DbSet<Announcement> Announcements { get; set; }
    public DbSet<Assignment> Assignments { get; set; }
    public DbSet<Attendance> Attendances { get; set; }
    public DbSet<Exam> Exams { get; set; }
    public DbSet<Grade> Grades { get; set; }
    public DbSet<Lesson> Lessons { get; set; }
    public DbSet<Parent> Parents { get; set; }
    public DbSet<Result> Results { get; set; }
    public DbSet<SchoolEvent> SchoolEvents { get; set; }
    public DbSet<Student> Students { get; set; }
    public DbSet<SchoolClass> SchoolClasses { get; set; }
    public DbSet<Subject> Subjects { get; set; }
    public DbSet<Teacher> Teachers { get; set; }
}
