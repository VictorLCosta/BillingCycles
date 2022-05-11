using Api.CrossCutting.AutoMapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Api.CrossCutting.DependencyInjection
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddServicesDependencies(this IServiceCollection services, IConfiguration config)
        {
            services.AddAutoMapper(typeof(MappingProfile).Assembly);

            return services;
        }
    }
}