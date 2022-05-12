using System;

namespace Api.Domain.DTO.BillingCycle
{
    public class BillingCycleDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
    }
}