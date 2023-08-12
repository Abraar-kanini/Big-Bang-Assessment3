using Big_Bang3_Assessment.Model;

namespace Big_Bang3_Assessment.Repository.IRepository
{
    public interface IUserRepository
    {

        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetUserById(int id);
        Task<int> AddUser(User user);
        Task<bool> UpdateUser(User user);
        Task<bool> DeleteUser(int id);
        Task<int?> GetUserIdByUsername(string username);
        Task<int> GetTotalNumberOfRecords();
    }
}
