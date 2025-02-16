let count =0;
function save(){
    let countstr=count + "-"
    document.getElementById("save-el").textContent+=countstr;
    console.log(count)
}
function increment(){
    count++;
    document.getElementById("count-el").innerHTML=count;;
    console.log(count);
}
