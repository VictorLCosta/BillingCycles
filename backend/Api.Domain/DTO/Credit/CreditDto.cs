using System;

namespace Api.Domain.DTO.Credit
{
    public class CreditDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Value { get; set; }

        public Guid BillingCycleId { get; set; }
    }
}