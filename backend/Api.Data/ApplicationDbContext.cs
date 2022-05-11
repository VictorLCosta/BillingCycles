using Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            
        }

        public DbSet<Credit> Credits { get; set; }
        public DbSet<Debt> Debts { get; set; }
        public DbSet<BillingCycle> BillingCycles { get; set; }


    }
}