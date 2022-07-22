const bodyObject = {
  background: "black",
  color: "white",
  fontSize: 20,
  isPresent: true,
  otherObject: {
    background: "red",
  },
  array: ["green", "blue", "yellow"],
  getRandomColor: function () {
    const randomDecimal = Math.random();
    const randomNumber = randomDecimal * this.array.length;
    const randomInteger = Math.floor(randomNumber);
    return this.array[randomInteger];
  },
};

// document.body.style.backgroundColor = bodyObject.getRandomColor();
// document.body.style.color = bodyObject.color;

const smiley = {
  head: {
    color: "yellow",
    height: "200px",
    width: "200px",
    radius: "50%",
    position: "relative",
  },
  leftEye: {
    color: "blue",
    height: "50px",
    width: "50px",
    radius: "50%",
    position: "absolute",
    top: "50px",
    left: "45px",
  },
  rightEye: {
    color: "blue",
    height: "50px",
    width: "50px",
    radius: "50%",
    position: "absolute",
    top: "50px",
    right: "45px",
  },
  mouth: {
    color: "transparent",
    height: "50px",
    width: "70px",
    radius: "50%",
    position: "absolute",
    top: "100px",
    right: "calc(50% - 35px)",
    borderBottom: "10px solid black",
  },
  face: null,
  createFace: function () {
    // createa a new div
    this.face = document.createElement("div");
    const div = this.face;
    // place it in the body
    document.body.appendChild(div);
    // set the style of the div
    div.style.backgroundColor = smiley.head.color;
    div.style.height = smiley.head.height;
    div.style.width = smiley.head.width;
    div.style.borderRadius = smiley.head.radius;
    div.style.position = smiley.head.position;
  },
  createLeftEye: function () {
    const div = document.createElement("div");
    // place it in the body
    this.face.appendChild(div);
    // set the style of the div
    div.style.backgroundColor = smiley.leftEye.color;
    div.style.height = smiley.leftEye.height;
    div.style.width = smiley.leftEye.width;
    div.style.borderRadius = smiley.leftEye.radius;
    div.style.position = smiley.leftEye.position;
    div.style.top = smiley.leftEye.top;
    div.style.left = smiley.leftEye.left;
  },
  createRightEye: function () {
    const div = document.createElement("div");
    // place it in the body
    this.face.appendChild(div);
    // set the style of the div
    div.style.backgroundColor = smiley.rightEye.color;
    div.style.height = smiley.rightEye.height;
    div.style.width = smiley.rightEye.width;
    div.style.borderRadius = smiley.rightEye.radius;
    div.style.position = smiley.rightEye.position;
    div.style.top = smiley.rightEye.top;
    div.style.right = smiley.rightEye.right;
  },
  createMouth: function () {
    const div = document.createElement("div");
    // place it in the body
    this.face.appendChild(div);
    // set the style of the div
    div.style.backgroundColor = smiley.mouth.color;
    div.style.height = smiley.mouth.height;
    div.style.width = smiley.mouth.width;
    div.style.borderRadius = smiley.mouth.radius;
    div.style.position = smiley.mouth.position;
    div.style.top = smiley.mouth.top;
    div.style.right = smiley.mouth.right;
    div.style.borderBottom = smiley.mouth.borderBottom;
  },
};

smiley.createFace();
smiley.createLeftEye();
smiley.createRightEye();
smiley.createMouth();
