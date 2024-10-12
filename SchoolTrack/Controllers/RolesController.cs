using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolTrack.helpers;
using SchoolTrack.Persistence;

namespace SchoolTrack.Controllers;

[Route("api/[controller]")]
public class RolesController : ControllerBase
{
    private readonly ILogger<RolesController> _logger;
    private readonly AppDbContext _context;

    public RolesController(ILogger<RolesController> logger, AppDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("GetAdminRole/{username}")]
    public async Task<IActionResult> GetAdminRole(string username)
    {
        var admin = await _context.Admins.FirstOrDefaultAsync(x => x.Username == username);
        if (admin == null)
        {
            return NotFound();
        }
        return Ok(new{
            username = admin.Username,
            roles= UtilsHelper.GetRoles(admin.Roles!)
        });
    }
}
