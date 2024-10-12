using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using SchoolTrack.Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

#region ServiceExtensions
string DbConString = Environment.GetEnvironmentVariable("DBConString",EnvironmentVariableTarget.Process) ?? string.Empty;
string RedisConString = Environment.GetEnvironmentVariable("RedisConstring", EnvironmentVariableTarget.Process) ?? string.Empty;

builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseNpgsql(DbConString, options => options.CommandTimeout((int)TimeSpan.FromMinutes(10).TotalSeconds));
});

#endregion

var app = builder.Build();


try { app.SeedDefaultsData().Wait(); } catch (Exception ex) { OnaxTools.Logger.LogException(ex, "[SeedDefaultsData]"); }

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

#region Static frontend serving
app.UseDefaultFiles(); // Serve the index.html file by default
string currentDir = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(currentDir),
    RequestPath = ""
});
#endregion

app.Use((context, next) =>
{
    System.Console.WriteLine($"=> Request: [{context.Request.Method}]:{context.Request.Path}");
    return next();
});

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToController("Index", "Fallback");
app.Run();
