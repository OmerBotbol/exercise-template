function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    const myArr = eval(input);
    let out =[];
    for (let i = 0; i < myArr.length; i++) {
        if(!(isNaN(myArr[i] / 0))){
            out.push(myArr[i])
    }
    }
    output.innerText = out;
}