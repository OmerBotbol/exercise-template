function run() {
    const inputArr = document.getElementById("input").value;
    const inputN = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = [];
    let myArr = JSON.parse(inputArr);
    let n = JSON.parse(inputN);
    if(n === undefined){
        out[0] = myArr[0];
    }
    else{
        for(let i = 0 ; i < n ; i++){
            if (myArr[i] === undefined){
                break;
            }
            out[i] = myArr[i];
        }
    }
    output.innerText = out;
}
