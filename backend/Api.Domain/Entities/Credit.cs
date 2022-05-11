using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Domain.Entities
{
    public class Credit : BaseEntity
    {
        public string Name { get; set; }
        public double Value { get; set; }

        [ForeignKey(nameof(BillingCycle))]
        public Guid BillingCycleId { get; set; }
        public BillingCycle BillingCycle { get; set; }
    }
}