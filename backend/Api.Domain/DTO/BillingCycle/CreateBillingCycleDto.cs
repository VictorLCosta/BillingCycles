using System.ComponentModel.DataAnnotations;

namespace Api.Domain.DTO.BillingCycle
{
    public class CreateBillingCycleDto
    {
        [Required(ErrorMessage = "Por favor, informe o nome")]
        public string Name { get; set; }

        [Range(1, 12, ErrorMessage = "Por favor, informe um mês entre 1 e 12")]
        public int Month { get; set; }

        [Range(1987, 2100, ErrorMessage = "Por favor, informe um ano entre 1987 e 2100")]
        public int Year { get; set; }
    }
}