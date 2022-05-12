using Api.Domain.DTO.BillingCycle;
using Api.Domain.DTO.Credit;
using Api.Domain.DTO.Debt;
using Api.Domain.Entities;
using AutoMapper;

namespace Api.CrossCutting.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<BillingCycle, BillingCycleDto>()
                .ReverseMap();

            CreateMap<BillingCycle, CreateBillingCycleResultDto>()
                .ReverseMap();

            CreateMap<BillingCycle, CreateBillingCycleDto>()
                .ReverseMap();


            CreateMap<Credit, CreditDto>()
                .ReverseMap();

            

            CreateMap<Debt, DebtDto>()
                .ReverseMap();

            
        }
    }
}