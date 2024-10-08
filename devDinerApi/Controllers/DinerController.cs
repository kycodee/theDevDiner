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

        //POST: api/postDinerDish
        [HttpPost("postDinerDish")]
        public async Task<ActionResult<DinerDish>> PostDiner(DinerDish dish)
        {
            _context.DinerDishes.Add(dish);
            await _context.SaveChangesAsync();

            //    return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            return CreatedAtAction(nameof(GetDishes), new { id = dish.Id }, dish);
        }

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
    }
}