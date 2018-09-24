using Microsoft.EntityFrameworkCore;

namespace CoC.Models
{
    public class CoCContext : DbContext
    {
        public CoCContext(DbContextOptions<CoCContext> options) : base(options)
        {

        }

        public DbSet<Character> Characters {get; set;}
    }
}