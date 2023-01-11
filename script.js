const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const allItens = document.querySelectorAll('.item')

const img = document.querySelectorAll('#imgs img')

let idx = 0

// Ir para posição específica

allItens.forEach(function(item,idx1) {
  item.addEventListener('click', function() {
    idx = idx1
    changeImage()
    resetInterval()
  });
});

// Slider Automático

let interval = setInterval(run, 3000)

function run() {
  idx++
  changeImage()

  allItens.forEach((item,idx1) => {
    if(idx1 === idx) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2850)
}

function changeImage() {
  if(idx > img.length-1){
    idx = 0
  } else if(idx<0){
    idx = img.length-1
  }

allItens.forEach((item,idx1) => {
  if(idx1 === idx) {
    item.classList.add('active')
    } else {
    item.classList.remove('active')
  }
})
  
  imgs.style.transform = `translateX(${-idx * 870}px)`
}

rightBtn.addEventListener('click', ()=> {
  idx++

  changeImage()
  resetInterval()
})

leftBtn.addEventListener('click', ()=> {
  idx--

  changeImage()
  resetInterval()
})




