function filter_list(l) {
    // Return a new array with the strings filtered out
    function typeFinder(type) {
        return type !== typeof(string);
    }

    const aRay = l.filter(type);
    return l;
    
  }