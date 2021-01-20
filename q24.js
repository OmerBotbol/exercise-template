function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let myArr = eval(input);
    let out =[];
    out = myArr.filter(Boolean)
    output.innerText = out;
}