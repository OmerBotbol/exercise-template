function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let myArr = [];
    for (let i = 0; i < input.length ; i++){
        myArr[i] = input[i];
    }
    for (let i = 1; i < myArr.length + 1; i++){
        out += myArr[i - 1];
        if(myArr[i] % 2 === 0 && myArr[i - 1] % 2 === 0){
            out += "-";
        }
    }
    output.innerText = out;
}
