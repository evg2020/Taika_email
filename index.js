let totalHight = document.documentElement.scrollHeight
let scrollTopn = document.documentElement.scrollTop
let windowHight = document.documentElement.clientHeight

console.log(totalHight, scrollTopn, windowHight);

function showText () {
  if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    console.log('ok');
  }
 window.removeEventListener('scroll',showText )
}

window.addEventListener('scroll',showText  )