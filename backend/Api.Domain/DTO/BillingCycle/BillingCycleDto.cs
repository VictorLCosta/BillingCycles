using System;
using System.Collections.Generic;
using Api.Domain.DTO.Credit;
using Api.Domain.DTO.Debt;

namespace Api.Domain.DTO.BillingCycle
{
    public class BillingCycleDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }

        public IEnumerable<CreateCreditDto> Credits { get; set; }
        public IEnumerable<CreateDebtDto> Debts { get; set; }
    }
}