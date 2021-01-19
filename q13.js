let out = "";
newArr = [];
count = 0;
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    newArr.push(input)
    count++;
    out += `Element ${count} = ${newArr[count-1]}\n`;
    console.log(newArr);
    console.log(count);
    output.innerText = out;
}