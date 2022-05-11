using Api.Data;
using Api.Data.Interfaces;
using Api.Data.Repositories;
using Api.Data.Transactions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace Api.CrossCutting.DependencyInjection
{
    public static class ConfigureData
    {
        public static IServiceCollection AddDataDependencies(this IServiceCollection services, IConfiguration config)
        {
            var connectionString = config.GetConnectionString("DefaultConnection");

            services.AddDbContext<ApplicationDbContext>(opt => {
                opt.UseSqlite(connectionString);
            });

            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));

            services.AddTransient<IUow, Uow>();

            return services;
        }
    }
}