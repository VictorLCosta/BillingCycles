using Api.Domain.Enums;

namespace Api.Domain.DTO.Debt
{
    public class CreateDebtDto
    {
        public string Name { get; set; }
        public double Value { get; set; }
        public DebtStatus Status { get; set; }
    }
}