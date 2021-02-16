const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  [...richestPeople]
    .map(a=> ({ value: a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">
      `
    })

    function dragStart() {
      dragStartIndex = +this.closest('li').getAttribute('data-index');
    }

    function dragOver(e){
      e.preventDefault();
    }

    function dragDrop(){
      const dragEndIndex = +this.getAttribute('data-index');
      swapItems(dragStartIndex, dragEndIndex);

      this.classList.remove('over');

    }

    function swapItems(fromIndex, toIndex) {
      const itemOne = listItems[fromIndex].querySelector('.draggable');
      const itemTwo = listItems[toIndex].querySelector('.draggable');
    }




    function addEventListeners(){
      const draggables = document.querySelectorAll('.draggable');
      const dragListItems = document.querySelectorAll('draggable-list li');

      draggables.forEach(draggable => {
        draggagle.addEventListener('dragstart', dragStart);
      });

      dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
      })
    }
}