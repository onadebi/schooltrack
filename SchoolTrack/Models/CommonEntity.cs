using Microsoft.EntityFrameworkCore;

namespace SchoolTrack.Models;

public class CommonEntity// : DbContext
{
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; } = null;

    public Guid Guid { get; set; } = Guid.NewGuid();
    public Boolean IsActive { get; set; } = true;

    public Boolean IsDeleted { get; set; } = false;

    // public override int SaveChanges()
    // {
    //     var entries = ChangeTracker.Entries().Where(e => e.State == EntityState.Added || e.State == EntityState.Modified);

    //     foreach (var entry in entries)
    //     {
    //         if (entry.Entity is CommonEntity commonEntity)
    //         {
    //             commonEntity.UpdatedAt = DateTime.UtcNow;
    //         }
    //     }
    //     return base.SaveChanges();
    // }
}
