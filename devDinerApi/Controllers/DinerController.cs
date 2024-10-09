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

        // GET: api/Diner
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DinerDish>>> GetDishes()
        {
            return await _context.DinerDishes.ToListAsync();
        }

        // POST: api/Diner/postDinerDish
        [HttpPost("postDinerDish")]
        public async Task<ActionResult<DinerDish>> PostDiner(DinerDish dish)
        {
            _context.DinerDishes.Add(dish);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDishes), new { id = dish.Id }, dish);
        }

        // PUT: api/Diner/updateDish/{id}
        [HttpPut("updateDish/{id}")]
        public async Task<IActionResult> PutDinerDish(long id, DinerDish dish)
        {
        if (id != dish.Id)
        {
            return BadRequest();
        }

        _context.Entry(dish).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!DinerDishExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

            return NoContent();
        }

        private bool DinerDishExists(long id)
        {
            return _context.DinerDishes.Any(e => e.Id == id);
        }

        // DELETE: api/Diner/deleteDish{id}
        [HttpDelete("deleteDish{id}")]
        public async Task<IActionResult> DeleteDinerDish(long id)
        {
            var dish = await _context.DinerDishes.FindAsync(id);
            if (dish == null)
            {
                return NotFound();
            }

            _context.DinerDishes.Remove(dish);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        }

}