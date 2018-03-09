function animal(obj){
    const animal = {
    name: obj.name,
    legs: obj.legs,
    color: obj.color
    };
    return("This " + animal.color + " " + animal.name + " has " + animal.legs + " legs.");
  }