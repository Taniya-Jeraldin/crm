using crm.Data;
using crm.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;


namespace AuthController 
    
{
    [ApiController]
    [Route("api/auth/login")]
    public class AuthController : ControllerBase
    {// connect to DBCONTEXT
        private readonly AppDbContext _dbContext;

        public AuthController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest model)
        {
            // Check for matching uer to the username
            var user = await _dbContext.Users.Where(u => u.Username == model.Username).FirstOrDefaultAsync();

            // check for password
            if (user == null || user.Password != model.Password)
            {
               
                return Unauthorized(new { message = "Invalid username or password" });
            }
            else
            {
            
                return Ok(new { message = "Login successful" });
            }
        }

   
    }
}
