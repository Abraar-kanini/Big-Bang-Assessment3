using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Big_Bang3_Assessment.Data;
using Big_Bang3_Assessment.Dto;
using Big_Bang3_Assessment.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace Big_Bang3_Assessment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly TourismDbContext _context;
        private const string UserRole = "Users";
        private const string AdminRole = "Admin";
        private const string UsersRole = "Agent";

        public TokenController(IConfiguration configuration, TourismDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }


        [HttpPost("Admin")]

        [HttpPost]
        public async Task<IActionResult> Post(AdminDto userData)
        {
            if (userData != null && !string.IsNullOrEmpty(userData.Admin_Name) && !string.IsNullOrEmpty(userData.Admin_Password))
            {
                var user = await GetAdmin(userData.Admin_Name, userData.Admin_Password);

                if (user != null)
                {
                    var token = GenerateToken(user);

                    return Ok(token);
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }
            }
            else
            {
                return BadRequest();
            }
        }

        private async Task<AdminRegister> GetAdmin(string username, string password)
        {
            var user = await _context.adminRegisters.FirstOrDefaultAsync(u => u.Admin_Name == username);

            if (user != null && VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return user;
            }

            return null;
        }

        private bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            using (var hmac = new HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(storedHash);
            }
        }

        private string GenerateToken(AdminRegister user)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("Admin_Id", user.Admin_Id.ToString()),
                new Claim("Admin_Name", user.Admin_Name)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(100),
                signingCredentials: signIn);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        [HttpPost("User")]
        public async Task<IActionResult> PostUser(User _userData)
        {
            if (_userData != null && _userData.User_Name != null && _userData.User_Password != null)
            {
                var user = await GetUser(_userData.User_Name, _userData.User_Password);

                if (user != null)
                {
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("User_Id", user. User_Id.ToString()),
                        new Claim("User_Name", user. User_Name),
                        new Claim("User_Password", user. User_Password),
                        new Claim(ClaimTypes.Role, UserRole)
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                        _configuration["Jwt:Issuer"],
                        _configuration["Jwt:Audience"],
                        claims,
                        expires: DateTime.UtcNow.AddMinutes(30),
                        signingCredentials: signIn);

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }
            }
            else
            {
                return BadRequest();
            }
        }

        private async Task<User> GetUser(string User_Name, string User_Password)
        {
            return await _context.users.FirstOrDefaultAsync(u => u.User_Name == User_Name && u.User_Password == User_Password);
        }

        [HttpPost("Agent")]
        public async Task<IActionResult> PostAgent(AgentRegister _agentData)
        {
            if (_agentData != null && _agentData.Agent_Name != null && _agentData.Agent_Password != null)
            {
                var agent = await GetAgent(_agentData.Agent_Name, _agentData.Agent_Password);

                if (agent != null)
                {
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("Agent_Id", agent.Agent_Id.ToString()),
                        new Claim("Agent_Name", agent.Agent_Name),
                        new Claim("Agent_Password", agent.Agent_Password),
                        new Claim(ClaimTypes.Role, UsersRole) // Assuming Agent role is used for users
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                        _configuration["Jwt:Issuer"],
                        _configuration["Jwt:Audience"],
                        claims,
                        expires: DateTime.UtcNow.AddMinutes(30),
                        signingCredentials: signIn);

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }
            }
            else
            {
                return BadRequest();
            }
        }

        private async Task<AgentRegister> GetAgent(string Agent_Name, string Agent_Password)
        {
            return await _context.agentRegisters.FirstOrDefaultAsync(u => u.Agent_Name == Agent_Name && u.Agent_Password==Agent_Password);
        }
    }
}
