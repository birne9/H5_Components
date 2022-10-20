// 1、生成大写abc字母
function getBigLetter() {
  let str = [];
  for (var i = 65; i < 91; i++) {
    str.push(String.fromCharCode(i));
  }
  return str;
}
// 2、渲染abc
let letterArr=getBigLetter()
let now = new Date();
let ul = document.querySelector("ul");
for (let i = 0; i < letterArr.length; i++) {
  let li = document.createElement("li");
  if(i===0){
    li.className='active'
  }
  li.innerHTML = letterArr[i];
  ul.appendChild(li);
}
//事件委托
ul.addEventListener("click", function (event) {
  let liNodes = document.querySelectorAll("li");
  for(let i=0; i<liNodes.length;i++){  
    liNodes[i].classList.remove('active')
  }
    event.target.className='active'
});
