using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using devDinerApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DinerController : ControllerBase
    {
        private readonly DinerContext _context;

        public DinerController(DinerContext context)
        {
            _context = context;
        }

        // GET: api/todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DinerDish>>> GetDishes()
        {
            return await _context.DinerDishes.ToListAsync();
        }
    }
}