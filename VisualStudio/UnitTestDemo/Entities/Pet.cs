using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Pet
    {
        public Pet(string name, int age)
        {
            Name = name;
            Age = age;
        }

        private string name;
        public string Name
        {
            get { return name; }
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Name is null or empty!");
                }

                name = value;
            }
        }

        private int age;
        public int Age
        {
            get { return age; }
            private set
            {
                if (value < 0 || value > 20)
                {
                    throw new PetAgeException();
                }
                
                age = value;
            }
        }

        public IPetDatabase Database { get; set; }

        public bool SaveToDatabase()
        {
            return Database.SaveNewPet(this);
        }


    }

    public class PetAgeException : ArgumentOutOfRangeException
    {
        public PetAgeException() : base("Age is not in the valid range [0-20]")
        {

        }
    }
}
