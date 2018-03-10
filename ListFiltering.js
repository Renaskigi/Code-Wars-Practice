function filter_list(l) {
    const newArray = l.filter(l => typeof l !== ('string'));
    return newArray;
}
