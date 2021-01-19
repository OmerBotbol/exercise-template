function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let array = JSON.parse(input);
    let out = "";
    for (let i = 0; i < array.length; i++) {
        out += `row ${i}\n`;
        for (let n = 0; n < array[i].length; n++) {
            out += `${array[i][n]}\n`;
        }
    }
    output.innerText = out;
}