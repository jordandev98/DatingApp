using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;


public class UsersController : BaseApiController
{

    private DataContext context { get; }

    public UsersController(DataContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {

        return await context.Users.ToListAsync();

    }


    [HttpGet("{id}")]
    public async Task<ActionResult<AppUser>> GetUserById(int id)
    {

        return await context.Users.FindAsync(id);

    }
}