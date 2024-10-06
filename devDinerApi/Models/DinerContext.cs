using Microsoft.EntityFrameworkCore;

namespace devDinerApi.Models;

public class DinerContext : DbContext
{
    public DinerContext(DbContextOptions<DinerContext> options)
        : base(options)
    {
    }

    public DbSet<DinerDish> DinerDishes { get; set; } = null!;
}