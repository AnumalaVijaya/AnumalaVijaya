interface shape{
    shapeName:string
    say:()=>string;
}
 var shapecone:shape={
    shapeName:"Cone",
    say:():string=>{return "Cone Shape"}
 }
 var shapeSphere:shape={
    shapeName:"Sphere,",
    say:():string=>{return "Sphere, Shape"}
 }
 var shapeRectangle:shape={
    shapeName:"Rectangle",
    say:():string=>{return "Rectangle Shape"}
 }
 console.log(shapecone.shapeName);
 console.log(shapecone.say());
 console.log(shapeSphere.shapeName);
 console.log(shapeSphere.say());
 console.log(shapeRectangle.shapeName);
 console.log(shapeRectangle.say());

