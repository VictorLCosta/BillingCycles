using System;
using System.Net;
using System.Threading.Tasks;
using Api.Domain.DTO.BillingCycle;
using Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Application.Controllers
{
    public class BillingCycleController : BaseApiController
    {
        private readonly IBillingCycleService _billingCycleService;

        public BillingCycleController(IBillingCycleService billingCycleService)
        {
            _billingCycleService = billingCycleService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var billingCycles = await _billingCycleService.GetAll();

            return Ok(billingCycles);
        }

        [HttpGet("{id}", Name = "GetBillingById")]
        public async Task<IActionResult> Get(Guid id)
        {
            if(id == Guid.Empty)
                return BadRequest("Informe o ID");

            var billingCycle = await _billingCycleService.GetById(id);
            if(billingCycle == null)
                return NotFound("Ciclo de cobrança não encontrado");

            return Ok(billingCycle);
        }

        [HttpGet("count")]
        public async Task<IActionResult> Count()
        {
            var count = await _billingCycleService.CountBillingCycles();

            return Ok(count);
        }

        [HttpPost]
        public async Task<IActionResult> Post(CreateBillingCycleDto model)
        {
            if(!ModelState.IsValid)
                return UnprocessableEntity(ModelState);

            try
            {
                var result = await _billingCycleService.Create(model);
                if(result != null)
                    return Created(new Uri(Url.Link("GetBillingById", result)), result);
                
                return BadRequest();
            }
            catch (System.Exception e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(Guid id)
        {
            if(id == Guid.Empty)
                return BadRequest("Informe o ID");

            try
            {
                return Ok(await _billingCycleService.Delete(id));
            }
            catch (System.Exception e)
            {
                return StatusCode((int) HttpStatusCode.InternalServerError, e.Message);
                throw;
            }

        }

    }
}