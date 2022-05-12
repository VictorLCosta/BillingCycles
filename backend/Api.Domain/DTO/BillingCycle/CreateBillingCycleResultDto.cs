using System;

namespace Api.Domain.DTO.BillingCycle
{
    public class CreateBillingCycleResultDto
    {
        public Guid Id { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}