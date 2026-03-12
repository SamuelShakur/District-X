// script.js: centralized JavaScript for District X

// write current date into any element with .date-span
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.date-span').forEach(el => {
        el.textContent = new Date().toLocaleDateString('en-US', options);
    });
});

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.8

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
