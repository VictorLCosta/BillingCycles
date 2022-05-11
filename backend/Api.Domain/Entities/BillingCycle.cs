using System;
using System.Collections.Generic;

namespace Api.Domain.Entities
{
    public class BillingCycle : BaseEntity
    {
        public string Name { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }

        public IEnumerable<Credit> Credits { get; set; }
        public IEnumerable<Debt> Debts { get; set; }

    }
}