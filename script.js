let plusBtns = document.getElementsByClassName("plus");
console.log(plusBtns);
let moinBtns = document.getElementsByClassName("moin");
let deletBtns = document.getElementsByClassName("delet");
let favorieBtns = document.getElementsByClassName("fa-heart");
console.log(favorieBtns)
function total (){
    let prix=document.getElementsByClassName("prix")
    let qtes=document.getElementsByClassName("qte")
    let total=document.querySelector("#totalprice")
    console.log(total)
    let sum=0;
     for (let i=0;i<prix.length;i++){
        sum+=prix[i].textContent*qtes[i].textContent
        total.textContent=sum
     }
}

for (const plusbtn of plusBtns) {
  plusbtn.addEventListener("click", function () {
    // console.log(plusbtn.nextElementSibling.textContent);
    plusbtn.nextElementSibling.textContent++;
       total()
  });
}
for (const moinbtn of moinBtns) {
  moinbtn.addEventListener("click", function () {
    if (moinbtn.previousElementSibling.textContent > 0) {
      moinbtn.previousElementSibling.textContent--;
    }
    total();
  });
}
for (const deletbnt of deletBtns) {
  deletbnt.addEventListener("click", function () {
    deletbnt.parentElement.parentElement.parentElement.remove();
    total();
  });
}
for (const favoriebtn of favorieBtns) {
  favoriebtn.addEventListener("click", function () {
    console.log("ok")
    favoriebtn.classList.toggle("toggelheart");
  });
}

/*let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")
let part1=document.getElementsByClassName("part1")
console.log(part1)
let btns=document.getElementsByTagName("button")
console.log(btns)
let somme=document.getElementsByClassName("som")
let count =0
let prix=document.getElementsByClassName("prix")

console.log(prix)
for (let i=0; i<prix.length;i++){
    btns[i]=addEventListener("click" , function(){
      
        console.log(count)
        somme[i].textContent=count;})
}
btns[0]=addEventListener("click" , function(){
    count++
    console.log(count)
    btns[0].nextElementSibling.innerHTML++
})
btns[1]=addEventListener("click" , function(){
    count++
    console.log(count)
    somme[1].textContent=count;
})
btns[2]=addEventListener("click" , function(){
    count++
    console.log(count)
    somme[2].textContent=count;
})
let sectionbutton=document.getElementsByClassName("btn")
console.log(sectionbutton)
let btnDelete=document.getElementsByClassName("delet");
console.log(btnDelete);

/*btnDelete[0]=addEventListener("click",function(){
    one.remove()
})
btnDelete[1]=addEventListener("click",function(){
    two.remove()
})
btnDelete[2]=addEventListener("click",function(){
    three.remove()
})*/
