using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Big_Bang3_Assessment.Data;
using Big_Bang3_Assessment.Model;
using Big_Bang3_Assessment.Repository.IRepository;
using Microsoft.EntityFrameworkCore;

namespace Big_Bang3_Assessment.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly TourismDbContext _context;

        public UserRepository(TourismDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _context.users.ToListAsync();
        }

        public async Task<User> GetUserById(int id)
        {
            return await _context.users.FindAsync(id);
        }

        public async Task<int> AddUser(User user)
        {
            _context.users.Add(user);
            await _context.SaveChangesAsync();
            return user.User_Id;
        }

        public async Task<bool> UpdateUser(User user)
        {
            _context.Entry(user).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(user.User_Id))
                {
                    return false;
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<bool> DeleteUser(int id)
        {
            var user = await _context.users.FindAsync(id);
            if (user == null)
            {
                return false;
            }

            _context.users.Remove(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<int?> GetUserIdByUsername(string username)
        {
            var user = await _context.users.FirstOrDefaultAsync(u => u.User_Name == username);
            return user?.User_Id;
        }

        public async Task<int> GetTotalNumberOfRecords()
        {
            return await _context.users.CountAsync();
        }

        private bool UserExists(int id)
        {
            return _context.users.Any(e => e.User_Id == id);
        }
    }
}
