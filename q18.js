function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    let items = JSON.parse(input);
    let num = JSON.parse(input2);
    for (let i = 0; i < items.length; i++) {
        if(items[i] === num){
            out = i;
        }
    }
    output.innerText = out; 
}