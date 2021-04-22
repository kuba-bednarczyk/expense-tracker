const $expenseTable = document.querySelector('table');
const $nameInput = document.querySelector('.name-box input[type=text]');
const $dateInput = document.querySelector('.date-input');
const $amountInput = document.querySelector('.amount-input');
const $addExpenseBtn = document.querySelector('.add-button');
const $allExpenses = document.getElementsByTagName('tr');

const $popUpOverlay = document.getElementById('overlay');
const $popUpInfo = document.querySelector('.popup-info');
const $popUpCloseBtn = document.querySelector('.popup-info button');

let $newExpense;

const addExpenseFunction = () => {
    if($nameInput.value !== '' && $dateInput.value !== '' && $amountInput.value !== ''){
        $newExpense = $expenseTable.insertRow();
        $newExpense.innerHTML = `
        <td>${$nameInput.value}</td><td>${$dateInput.value}</td><td>${$amountInput.value} zł</td>
        `;
        $nameInput.value = '';
        $dateInput.value = '';
        $amountInput.value = '';
        createDeleteBtn();
    } else {
        $popUpInfo.classList.add('active');
        $popUpOverlay.classList.add('active');
    }
};

const createDeleteBtn = () => {
    //creating new td 
    const deleteTd = document.createElement('td');
    $newExpense.appendChild(deleteTd);
    //create delete button and pushing it into new td tag
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '✖';
    deleteTd.appendChild(deleteBtn);
};

const deleteExpense = (e) => {
   const closestTr = e.target.closest('tr');
   closestTr.remove();
};

const checkClickDelBtn = (e) => {
    if(e.target.closest('button').classList.contains('delete-btn')) {deleteExpense(e)};
};

const closePopUp = () => {
    $popUpInfo.classList.remove('active');
    $popUpOverlay.classList.remove('active');
};


$expenseTable.addEventListener('click', checkClickDelBtn);
$addExpenseBtn.addEventListener('click', addExpenseFunction);

$popUpOverlay.addEventListener('click', closePopUp);
$popUpCloseBtn.addEventListener('click', closePopUp);