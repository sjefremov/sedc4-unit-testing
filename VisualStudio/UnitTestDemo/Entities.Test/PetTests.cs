using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Entities.Test
{
    [TestClass]
    public class PetTests
    {
        [TestMethod]
        public void Constructor_SetProperties_Valid_Test()
        {
            //arrange
            var name = "Rex";
            var age = 10;

            //act
            var rex = new Pet(name, age);

            //assert
            Assert.AreEqual(name, rex.Name);
            Assert.AreEqual(age, rex.Age);
        }

        [TestMethod]
        [ExpectedException(typeof(Exception))]//assert part
        public void Constructor_SetProperties_Negative_Test()
        {
            //arrange
            var name = "Rex";
            var age = -10;

            //act
            var rex = new Pet(name, age);
                
        }


    }
}
