window.onload = function () {
  document.getElementById('user').innerHTML = 'Mukilan';
};
const Button = document.getElementById('btn-click');
function myFunc() {
  Button.style.backgroundColor = 'red';
}
const button = document.getElementById('build-button');
function makeSentence() {
  var a = document.getElementById('noun').value;
  var b = document.getElementById('verb').value;
  var c = document.getElementById('adverb').value;
  var d = a + ' ' + b + ' ' + c;
  document.getElementById('statement').innerText = d;
}
button.onclick = makeSentence;
const Grandparent = document.getElementById('grandparent');
Grandparent.addEventListener('click', (e) => {
  console.log('Grandparent');
});
const Parent = document.getElementById('parent');
Parent.addEventListener('click', (e) => {
  console.log('Parent');
});
const Child = document.getElementById('child');
Child.addEventListener('click', (e) => {
  console.log('Child');
});
Grandparent.addEventListener(
  'click',
  (e) => {
    console.log('Grandparent clicked');
  },
  {
    capture: true,
  }
);
Parent.addEventListener(
  'click',
  (e) => {
    console.log('Parent clicked');
  },
  {
    capture: true,
  }
);
Child.addEventListener(
  'click',
  (e) => {
    console.log('Child clicked');
  },
  {
    capture: true,
  }
);
const unorder = document.querySelectorAll('#category>li');
console.log(unorder);

unorder[0].addEventListener('click', (e) => {
  // if document.getElementById("shirts"){
  // console.log(e.target.li="shirts")
  // }
  console.log(unorder[0].innerText);
});

unorder[1].addEventListener("click",(e)=>{
  console.log(unorder[1].innerText)
})
unorder[2].addEventListener("click",(e)=>{
  console.log(unorder[2].innerText)
})