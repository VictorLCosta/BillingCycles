using System;
using Api.Domain.Enums;

namespace Api.Domain.DTO.Debt
{
    public class DebtDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Value { get; set; }
        public DebtStatus Status { get; set; }
        
        public Guid BillingCycleId { get; set; }
    }
}