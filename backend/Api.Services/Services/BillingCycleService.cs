using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Api.Data.Transactions;
using Api.Domain.DTO.BillingCycle;
using Api.Domain.DTO.Summary;
using Api.Domain.Entities;
using Api.Services.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Services.Services
{
    public class BillingCycleService : IBillingCycleService
    {
        private readonly IUow _uow;
        private readonly IMapper _mapper;

        public BillingCycleService(IUow uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }


        public async Task<CreateBillingCycleResultDto> Create(CreateBillingCycleDto model)
        {
            try
            {
                var billingCycle = _mapper.Map<BillingCycle>(model);

                var result = await _uow.BillingCycles.AddAsync(billingCycle);

                return _mapper.Map<CreateBillingCycleResultDto>(result);
            }
            catch (System.Exception)
            {
                throw;
            }
        }

        public async Task<bool> Delete(Guid id)
        {
            var result = await _uow.BillingCycles.Remove(id);
            return result;
        }

        public async Task<IEnumerable<BillingCycleDto>> GetAll()
        {
            var billingCycles = await _uow.BillingCycles
                .Queryable()
                .Include(x => x.Credits)
                .Include(x => x.Debts)
                .ToListAsync();

            return _mapper.Map<IEnumerable<BillingCycleDto>>(billingCycles);
        }

        public async Task<BillingCycleDto> GetById(Guid id)
        {
            var billingCycle = await _uow.BillingCycles
                .FindBy(x => x.Id == id)
                .Include(x => x.Credits)
                .Include(x => x.Debts)
                .FirstOrDefaultAsync();

            return _mapper.Map<BillingCycleDto>(billingCycle);
        }

        public async Task<SummaryDto> GetSummary()
        {
            try
            {
                var debts = await _uow.BillingCycles
                    .Queryable()
                    .SelectMany(x => x.Debts)
                    .ToListAsync();

                var credits = await _uow.BillingCycles
                    .Queryable()
                    .SelectMany(x => x.Credits)
                    .ToListAsync();

                var result = new SummaryDto 
                {
                    Debt = debts.Sum(x => x.Value),
                    Credit = credits.Sum(x => x.Value)
                };

                return result;
            }
            catch (System.Exception)
            {
                throw;
            }
        }

        public async Task<int> CountBillingCycles()
        {
            var billingCycles = await _uow.BillingCycles.GetAllAsync();

            return billingCycles.Count();
        }

    }
}