using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Test
{
    internal class PetDatabaseTest : IPetDatabase
    {
        public bool IsCalled { get; set; }

        public bool SaveNewPet(Pet pet)
        {

            IsCalled = true;

            if (pet == null)
            {
                return false;
            }
            
            return true;
        }
    }
}
