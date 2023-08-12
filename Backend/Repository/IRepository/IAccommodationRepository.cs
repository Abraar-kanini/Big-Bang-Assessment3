using Big_Bang3_Assessment.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Big_Bang3_Assessment.Repositories
{
    public interface IAccommodationRepository
    {
        Task<IEnumerable<AccommodationDetail>> GetAllAccommodationsAsync();
        Task<IEnumerable<AccommodationDetail>> GetAccommodationsByAgencyIdAsync(int agencyId);
        Task<AccommodationDetail> AddAccommodationAsync(AccommodationDetail accommodation);
    }
}
