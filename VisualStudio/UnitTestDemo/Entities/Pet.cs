using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Pet
    {
        public string Name { get; private set; }

        private int age;
        public int Age
        {
            get { return age; }
            private set
            {
                if (value < 0 || value > 20)
                {
                    throw new Exception("Invalid value for age!");
                }

                age = value;
            }
        }

        public Pet(string name, int age)
        {
            Name = name;
            Age = age;
        }
    }
}
