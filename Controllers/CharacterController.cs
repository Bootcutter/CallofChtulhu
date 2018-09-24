using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using CoC.Models;

namespace CoC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharacterController : ControllerBase
    {
        private readonly CoCContext _context;
        public CharacterController(CoCContext context)
        {
            _context = context;
            if(_context.Characters.Count() == 0)
            {
                _context.Characters.Add(new Character{Name="Martin Andersson" , Description = "prettiest of em all", Id=5});
                _context.SaveChanges();
            }
        
        }
   
        [HttpGet]
        public ActionResult<List<Character>> GetAll(){
            return _context.Characters.ToList();
            }
    
        [HttpGet("{id}", Name="GetCharacter")]
        public ActionResult<Character> GetCharacterById(long id)
        {
            var item = _context.Characters.Find(id);
            if(item == null)
            {return NotFound();}
            return item;
        }
    
    }



   
}