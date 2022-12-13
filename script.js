

const elBtn = document.querySelector('#push');
const elInput = document.querySelector('input');
const elTasks = document.querySelector('#tasks');
const elNewTasks = document.querySelector('#new-tasks');


elBtn.addEventListener('click', function() {
if(elInput.value.length == 0 ){;
alert('Please select a task')}
else{
elTasks.innerHTML += `
    <div class="task">
        <span id="taskname">
        ${elInput.value}
        </span>

<button class="delete">
<i class="fa fa-trash-alt"></i> 
</button>
</div>
        `;
        let currentTask = document.querySelectorAll('.delete');
       for(let i = 0; i < currentTask.length; i++) { 
currentTask[i].onclick = function() {
this.parentNode.remove();
};
       }
}
});


  






