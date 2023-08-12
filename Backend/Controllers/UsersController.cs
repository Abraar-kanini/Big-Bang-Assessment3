using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Big_Bang3_Assessment.Model;
using Big_Bang3_Assessment.Repositories;
using Big_Bang3_Assessment.Repository.IRepository;

namespace Big_Bang3_Assessment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // GET: api/Users
        [HttpGet]
        [ProducesResponseType(statusCode: 201)]
        [ProducesResponseType(statusCode: 409)]
        public async Task<ActionResult<IEnumerable<User>>> Getusers()
        {
            var users = await _userRepository.GetAllUsers();
            return Ok(users);
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        [ProducesResponseType(statusCode: 201)]
        [ProducesResponseType(statusCode: 409)]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _userRepository.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.User_Id)
            {
                return BadRequest();
            }

            var updated = await _userRepository.UpdateUser(user);
            if (updated)
            {
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [ProducesResponseType(statusCode: 201)]
        [ProducesResponseType(statusCode: 409)]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            var userId = await _userRepository.AddUser(user);
            return CreatedAtAction("GetUser", new { id = userId }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var deleted = await _userRepository.DeleteUser(id);
            if (deleted)
            {
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }

        // Custom endpoint to get UserId by Username

        [HttpGet("GetUserIdByUsername")]
        [ProducesResponseType(statusCode: 201)]
        [ProducesResponseType(statusCode: 409)]
        public async Task<ActionResult<int>> GetUserIdByUsername(string username)
        {
            var userId = await _userRepository.GetUserIdByUsername(username);
            if (userId == null)
            {
                return NotFound();
            }
            return Ok(userId);
        }

        // Custom endpoint to get the total number of records
        [ProducesResponseType(statusCode: 201)]
        [ProducesResponseType(statusCode: 409)]
        [HttpGet("records")]
        public async Task<ActionResult<int>> GetTotalNumberOfRecords()
        {
            var totalRecords = await _userRepository.GetTotalNumberOfRecords();
            return Ok(totalRecords);
        }
    }
}
