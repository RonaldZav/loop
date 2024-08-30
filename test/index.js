const loop = require("../index.js");

loop(3, 100, (i) => {
    console.log(`Loop ${i + 1}`);
})