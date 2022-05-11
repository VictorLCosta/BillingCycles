using System;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Domain.Enums;

namespace Api.Domain.Entities
{
    public class Debt : BaseEntity
    {
        public string Name { get; set; }
        public double Value { get; set; }
        public DebtStatus Status { get; set; }

        [ForeignKey(nameof(BillingCycle))]
        public Guid BillingCycleId { get; set; }
        public BillingCycle BillingCycle { get; set; }
    }
}