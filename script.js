const countValue = document.getElementById("count");
const colorPart = document.querySelectorAll(".color-part");
const container = document.querySelector(".count");
const startButton = document.querySelector("#start");
const result = document.querySelector("#result");
const wrapper = document.querySelector(".wrapper");

const colors = {
    color1: {
        current: "#068e06",
        new: "#11e711",
    },
    color2: {
        current: "#950303",
        new: "#fd2a2a",
    },
    color2: {
        current: "#01018a",
        new: "#2062fc",
    },
    color4: {
        current: "#919102",
        new: "#fafa18",
    },
}

let ramdomColors = [];
let pathGeneratorBool = false;
let count,
    clickCount = 0;

startButton.addEventListener("click", () => {
    count = 0;
    clickCount = 0;
    randomColors = [];
    pathGeneratorBool = false;
    pathGenerate();
});

const pathGenerate = () => {
    randomColors.push(generateRandomValue(colors));
    count = randomColors.length;
    pathGeneratorBool = true;
    pathDecide(count);
};

const generateRandomValue = (obj) => {
    let arr = Object.key(obj);
    return arr[Math.floor(Math.random() * arr.length)];
};


