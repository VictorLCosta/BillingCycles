using Api.Data.Interfaces;
using Api.Domain.Entities;

namespace Api.Data.Repositories
{
    public class BillingCycleRepository : Repository<BillingCycle>, IBillingCycleRepository
    {
        public BillingCycleRepository(ApplicationDbContext context) 
            : base(context)
        {
        }
    }
}