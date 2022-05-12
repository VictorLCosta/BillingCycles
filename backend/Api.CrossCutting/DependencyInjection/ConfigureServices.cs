using Api.CrossCutting.AutoMapper;
using Api.Services.Interfaces;
using Api.Services.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Api.CrossCutting.DependencyInjection
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddServicesDependencies(this IServiceCollection services, IConfiguration config)
        {
            services.AddTransient<IBillingCycleService, BillingCycleService>();

            services.AddAutoMapper(typeof(MappingProfile).Assembly);

            return services;
        }
    }
}