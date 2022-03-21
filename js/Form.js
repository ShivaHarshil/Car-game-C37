class Form {
  constructor() {
  this.name = createInput();
  this.button = createButton("PLAY");
  this.img = createImg("assets/title.png")
  this.greeting = createElement("h1")

 }
display(){
this.button.size(60,30);
this.button.position(730,500);
this.img.size(900,100);
this.img.position(200,200);
this.name.size(300,40);
this.name.position(600,400)


}
}