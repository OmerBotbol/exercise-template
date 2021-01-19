function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = [];
    let arrList  = JSON.parse(input);
    for (let i = 0; i < arrList.length; i++) {
        for (let n = i+1; n < arrList.length; n++) {
            if (arrList[i] === arrList[n] && !(out.includes(arrList[i]))){
                out.push(arrList[i]);
            }
        }
    }
    output.innerText = out;
}