function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
    if ((this.draft - (1.5 * this.crew)) >= 20) {
        return true;
    }
    else {
        return false;
    }   
};
