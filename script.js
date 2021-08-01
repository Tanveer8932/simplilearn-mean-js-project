window.onload= function (){
const btn = document.querySelector('#li-generate');
const inpt = document.querySelector('#inputValue');
const inds = document.querySelector('#inputDes');
const section = document.querySelector('.blogList');

//const deleteLi = document.querySelector('.remove');

btn.addEventListener('click', liGenerate);
document.addEventListener('click', liDelete);

function liGenerate(e) {
  const div = document.createElement('div');
  const p = document.createElement('p');
  
  if(inpt.value !== "") {
    div.className = "blog-item"; 
    p.className = "desc"; 
    //const liContent = document.createTextNode(`${inpt.value}`);
    div.innerHTML = `${inpt.value}`;
    p.innerHTML = `${inds.value} <div class='remove'>Remove Blog !</div>`;

    //li.appendChild(liContent);
    section.appendChild(div);
    div.appendChild(p);
    inpt.value = "";
    inds.value = "";
  }
  e.preventDefault();
}

function liDelete(e) {
  if(e.target.className === 'remove') {
    e.target.parentElement.remove();
  }
}
}