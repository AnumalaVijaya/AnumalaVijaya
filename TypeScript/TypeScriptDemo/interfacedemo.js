var shapecone = {
    shapeName: "Cone",
    say: function () { return "Cone Shape"; }
};
var shapeSphere = {
    shapeName: "Sphere,",
    say: function () { return "Sphere, Shape"; }
};
var shapeRectangle = {
    shapeName: "Rectangle",
    say: function () { return "Rectangle Shape"; }
};
console.log(shapecone.shapeName);
console.log(shapecone.say());
console.log(shapeSphere.shapeName);
console.log(shapeSphere.say());
console.log(shapeRectangle.shapeName);
console.log(shapeRectangle.say());
