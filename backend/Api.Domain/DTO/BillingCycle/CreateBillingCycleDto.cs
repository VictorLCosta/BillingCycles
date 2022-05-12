namespace Api.Domain.DTO.BillingCycle
{
    public class CreateBillingCycleDto
    {
        public string Name { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
    }
}