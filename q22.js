function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = [];
    let arr1 = JSON.parse(input);
    let arr2 = JSON.parse(input2);
    let orderedArr = [];
    for (let i = 0; i < arr1.length; i++) {
        orderedArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        orderedArr.push(arr2[i]);
    }
    orderedArr = orderedArr.sort((a, b) => a - b);
    console.log(orderedArr);
    for (let i = 0; i < orderedArr.length; i++) {
        if(!(out.includes(orderedArr[i]))){
            out.push(orderedArr[i]);
        }
    }
    output.innerText = out;
}