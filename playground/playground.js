const polygons = {
  shapes: [],
  set current(shape) {
    this.shapes.push(shape);
  },
  get latest() {
    if (this.shapes.length === 0) {
      return undefined;
    }
    return this.shapes[this.shapes.length - 1];
  }
};


polygons.current = 'a';
polygons.current = 'b';
polygons.current = 'c';

console.log(polygons.latest);