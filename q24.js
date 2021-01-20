function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let myArr = eval(input);
    let out =[];
    for (let i = 0; i < myArr.length; i++) {
        if(typeof(myArr[i]) === "string" && myArr[i] !== ""){
            out.push(myArr[i]);
        }
        if (myArr[i] / 0 === Infinity || myArr[i] / 0 === -Infinity) {
            out.push(myArr[i]);
        }
    }
    output.innerText = out;
}