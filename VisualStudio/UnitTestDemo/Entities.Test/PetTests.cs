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
        [ExpectedException(typeof(PetAgeException))]//assert part
        public void Constructor_NegativeAge_Exception_Test()
        {
            //arrange
            var name = "Rex";
            var age = -10;

            //act
            var rex = new Pet(name, age);
                
        }

        [TestMethod]
        [ExpectedException(typeof(PetAgeException))]//assert part
        public void Constructor_AgeOverflow_Exception_Test()
        {
            //arrange
            var name = "Rex";
            var age = 90;

            //act
            var rex = new Pet(name, age);

        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]//assert part
        public void Constructor_EmptyName_Exception_Test()
        {
            //arrange
            var name = string.Empty;
            var age = 10;

            //act
            var rex = new Pet(name, age);

        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]//assert part
        public void Constructor_NullName_Exception_Test()
        {
            //arrange
            string name = null;
            var age = 10;

            //act
            var rex = new Pet(name, age);

        }

        [TestMethod]
        public void SaveToDatabase_Valid_Test()
        {
            //arrange
            var name = "Rex";
            var age = 10;
            var rex = new Pet(name, age);
            var database = new PetDatabaseTest();
            rex.Database = database;

            //act
            var result = rex.SaveToDatabase();

            //assert
            Assert.IsTrue(result);
            Assert.IsTrue(database.IsCalled);
        }


    }
}
