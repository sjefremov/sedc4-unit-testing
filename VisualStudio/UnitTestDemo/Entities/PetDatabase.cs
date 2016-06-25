using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class PetDatabase : IPetDatabase
    {
        public bool SaveNewPet(Pet pet)
        {
            if (pet == null)
            {
                return false;
            }
            Console.WriteLine($"Pet ({pet.Name}, {pet.Age}) was saved.");
            return true;
        }
    }
}
