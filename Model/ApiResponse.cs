
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hacker_news_nextech.Model
{
    public class ApiResponse
    {
        
        public bool Status { get; set; }
        public Story Story { get; set; }
        public bool Succeeded { get; set; }
        public string ErrorMessage { get; set; }
        public string Result { get; set; }
        public ModelStateDictionary ModelState { get; set; }

    }
}