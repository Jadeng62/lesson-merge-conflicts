function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(person, otherPerson) {
    person.friends.push(otherPerson);
    return person;
  }
  