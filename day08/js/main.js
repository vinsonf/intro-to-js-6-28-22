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
    color: "black",
    height: "50px",
    width: "50px",
    radius: "50%",
    position: "absolute",
    top: "50px",
    left: "45px",
  },
  rightEye: {
    color: "black",
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





class Smiley {
    winking = false;
    constructor(headColor = 'yellow') {
        this.head.color = headColor;
        this.createFace();
        this.createLeftEye();
        this.createRightEye();
        this.createMouth();
        console.log(this.head);
        setInterval(() => {
            if (Math.random() > 0.5) {
                if (this.winking) {
                    this.unwink();
                  } else{
                      this.wink();
                  }
            }
        }, 1000)
    }
    wink(){
        this.winking = true;
        console.log(this);
        this.left.style.height = '1px';
        this.left.style.top = '75px';
    }
    unwink(){
        this.winking = false;
        this.left.style.height = '50px';
        this.left.style.top = '50px';
    }


    head = {
      color: "yellow",
      height: "200px",
      width: "200px",
      radius: "50%",
      position: "relative",
    };
    leftEye = {
      color: "black",
      height: "50px",
      width: "50px",
      radius: "50%",
      position: "absolute",
      top: "50px",
      left: "45px",
    };
    rightEye = {
      color: "black",
      height: "50px",
      width: "50px",
      radius: "50%",
      position: "absolute",
      top: "50px",
      right: "45px",
    };
    mouth = {
      color: "transparent",
      height: "50px",
      width: "70px",
      radius: "50%",
      position: "absolute",
      top: "100px",
      right: "calc(50% - 35px)",
      borderBottom: "10px solid black",
    };
    face = null;
    left = null;
    createFace = function () {

      // createa a new div
      this.face = document.createElement("div");
      const div = this.face;
      div.style.display = 'inline-block';
      this.face.addEventListener('click', () => {
        if(this.winking){
          this.unwink();
        } else {
          this.wink();
        }
      });
      // place it in the body
      document.body.appendChild(div);
      // set the style of the div
      div.style.backgroundColor = this.head.color;
      div.style.height = this.head.height;
      div.style.width = this.head.width;
      div.style.borderRadius = this.head.radius;
      div.style.position = this.head.position;
    };
    createLeftEye= function () {
      const div = document.createElement("div");
      this.left = div;
      div.style.transition = 'all 1s ease';
      // place it in the body
      this.face.appendChild(div);
      // set the style of the div
      div.style.backgroundColor = this.leftEye.color;
      div.style.height = this.leftEye.height;
      div.style.width = this.leftEye.width;
      div.style.borderRadius = this.leftEye.radius;
      div.style.position = this.leftEye.position;
      div.style.top = this.leftEye.top;
      div.style.left = this.leftEye.left;
      
    };
    createRightEye = function () {
      const div = document.createElement("div");
      // place it in the body
      this.face.appendChild(div);
      // set the style of the div
      div.style.backgroundColor = this.rightEye.color;
      div.style.height = this.rightEye.height;
      div.style.width = this.rightEye.width;
      div.style.borderRadius = this.rightEye.radius;
      div.style.position = this.rightEye.position;
      div.style.top = this.rightEye.top;
      div.style.right = this.rightEye.right;
    };
    createMouth = function () {
      const div = document.createElement("div");
      // place it in the body
      this.face.appendChild(div);
      // set the style of the div
      div.style.backgroundColor = this.mouth.color;
      div.style.height = this.mouth.height;
      div.style.width = this.mouth.width;
      div.style.borderRadius = this.mouth.radius;
      div.style.position = this.mouth.position;
      div.style.top = this.mouth.top;
      div.style.right = this.mouth.right;
      div.style.borderBottom = this.mouth.borderBottom;
    };
  };
  
  const smiley1 = new Smiley('red');
  setTimeout(() => {
    smiley1.wink();
  });

  setInterval(() => {
    if (smiley1.winking) {
      smiley1.unwink();
    } else{
        smiley1.wink();
    }
  }, 2000);

const smiley2 = new Smiley('blue');
setTimeout(() => {
    smiley2.wink();
})
new Smiley('green');
const colors = ['red', 'blue', 'green', 'purple'];
for(let i = 0; i < 100; i++){
    new Smiley(colors[i % 4]);
}