using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.DTO.BillingCycle;
using Api.Domain.DTO.Summary;
using Microsoft.AspNetCore.Mvc;

namespace Api.Services.Interfaces
{
    public interface IBillingCycleService
    {
        Task<IEnumerable<BillingCycleDto>> GetAll();
        Task<BillingCycleDto> GetById(Guid id);
        Task<SummaryDto> GetSummary();
        Task<int> CountBillingCycles();

        Task<CreateBillingCycleResultDto> Create(CreateBillingCycleDto model);
        Task<bool> Delete(Guid id);
    }
}