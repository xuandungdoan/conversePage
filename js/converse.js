// When the user scrolls the page, execute myFunction
$(document).ready(function () {
  var check = 1;
  window.addEventListener('scroll', function () {
    var header = document.getElementById("myHeader");
    var sticky = 200;
    var box = document.getElementById('box');
    var search = document.getElementById('search');

    if (window.pageYOffset > header.offsetTop) {
      if(check==1){
        header.classList.add("sticky");
        box.style.transition="0.4s";
    search.style.transition="0.4s";
    box.style.width="50px";
    search.style.display= 'none';
        check = 0;
        console.log('fds', check);
      }
      


    } else if (window.pageYOffset <= header.offsetTop+150) {
      if(check==0){
        header.classList.remove("sticky");
        box.style.transition="0.6s";
    search.style.transition="0.4s";
    box.style.width="200px";
    search.style.display= 'block';
        check = 1;
        console.log('123124', check);
      }
      

    }
  })
})

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = 200;
var box = document.getElementById('box');
var search = document.getElementById('search');

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  var check = 1;
  console.log('bácfd', check);
  if (window.pageYOffset > 300) {
    if (check == 1) {
      header.classList.add("sticky");
      box.classList.add('box');
      search.style.display = 'none';
      check = 0;
      console.log('fds', check);
    }

  } else if (window.pageYOffset <= 300) {
    if (check == 0) {
      header.classList.remove("sticky");
      box.classList.remove('box');
      search.style.display = 'block';
      check = 1;
      console.log('123124', check);
    }
  }
}

// function myFunction2() {
//   var check = true
//   if (window.pageYOffset > sticky) {
//     if (check == true) {

//       check = false;
//     }

//   } else {
//     if (check == false) {
//       box.style.transition = "0.5s";
//       box.style.width = "200px";
//       search.style.display = 'block';
//       check = true;
//     }
//   }

// }