var s1
//setup function
function setup() {
  createCanvas(400, 400);
  s1 = new Student("Amulya", 13, 8)

}
//draw function
function draw() {
  background(30);
  s1.show()
}