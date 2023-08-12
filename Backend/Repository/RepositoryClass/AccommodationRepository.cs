using Big_Bang3_Assessment.Data;
using Big_Bang3_Assessment.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Big_Bang3_Assessment.Repositories
{
    public class AccommodationRepository : IAccommodationRepository
    {
        private readonly TourismDbContext _context;

        public AccommodationRepository(TourismDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AccommodationDetail>> GetAllAccommodationsAsync()
        {
            return await _context.accommodations.Include(a => a.agency).ToListAsync();
        }

        public async Task<IEnumerable<AccommodationDetail>> GetAccommodationsByAgencyIdAsync(int agencyId)
        {
            return await _context.accommodations.Include(a => a.agency)
                                                .Where(a => a.agency.Agency_Id == agencyId)
                                                .ToListAsync();
        }

        public async Task<AccommodationDetail> AddAccommodationAsync(AccommodationDetail accommodation)
        {
            var agency = await _context.agencies.FindAsync(accommodation.agency.Agency_Id);
            accommodation.agency = agency;

            _context.accommodations.Add(accommodation);
            await _context.SaveChangesAsync();

            return accommodation;
        }
    }
}
