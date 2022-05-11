using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Domain.Entities
{
    public abstract class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        public BaseEntity()
        {
            Id = Guid.NewGuid();
        }

        private DateTime? _createDate;
        public DateTime? CreatedAt 
        { 
            get { return _createDate; } 
            set { _createDate = value == null ? DateTime.Now : value; } 
        }

        public DateTime? UpdatedAt { get; set; }
    }
}