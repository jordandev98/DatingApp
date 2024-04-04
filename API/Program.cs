using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(opt => {
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();

var app = builder.Build();

app.UseCors( builder => builder.AllowAnyHeader().AllowAnyHeader().WithOrigins("https://localhost:4200"));
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();

