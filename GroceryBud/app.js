
// ---------------------------selection ------------------------------
let alert = document.querySelector('.alert');
let groceryForm = document.querySelector('.grocery-form');
let grocery = document.getElementById('grocery');
let submit_btn = document.querySelector('.submit-btn');
let container = document.querySelector('.grocery-container');
let list = document.querySelector('.grocery-list');
let clearBtn = document.querySelector('.clear-btn');
// console.log(container);

// ---------------------------edit option ------------------------------

let editElement;
let editFlag = false;
let editID = '';

groceryForm.addEventListener('submit', addItem);

// clear btn

clearBtn.addEventListener('click', clearItem);

// load 
window.addEventListener('load', setupItem)

// function

function addItem(e) {
    e.preventDefault();
    let value = grocery.value;
    let id = new Date().getTime().toString();
    // console.log(id);

    if (value !== "" && !editFlag) {

        let element = document.createElement('article');
        element.classList.add('grocery-item');

        let attr = document.createAttribute('data-id');
        attr.value = id;
        element.classList.add('grocery-item');

        element.innerHTML = `<p class="tittle">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>`;


        // append child
        list.appendChild(element);

        // selection for button delete or edit buttons

        let deleteBtn = document.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteItem);
        let editBtn = document.querySelector('.edit-btn');
        editBtn.addEventListener('click', editItem);

        // item added
        displayAlert('item added to the list', 'success');
        // show container
        container.classList.add('show-container');

        //add to local storage
        addToLocalStorage(id, value);

        // set back to default
        setBackToDefault();

        // -----------------------------------------------------------------

    } else if (value !== "" && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed', "success");
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
        // console.log(editElement);
    } else {
        // console.log('empty value');
        displayAlert('please Enter Value', 'danger')
    }
}

// empty value function 

function displayAlert(value, action) {
    alert.textContent = value;
    alert.classList.add(action);


    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(action);
    }, 1000)


}

// clearItem function

function clearItem() {
    let items = document.querySelectorAll('.grocery-item');

    if (items > 0) {
        items.forEach(function (item) {
            list.removeChild(item)
        })
    }

    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    setBackToDefault();
    localStorage.removeItem('list');
}

// delete item

function deleteItem(e) {
    // console.log('delete item');
    let element = e.currentTarget.parentElement.parentElement;

    let id = element.dataset.id;
    // console.log(id);

    list.removeChild(element)

    if (list.children.length === 0) {
        container.classList.remove('show-container');
    }

    displayAlert("item removed", 'danger');
    setBackToDefault();

    // remove from local storage
    removeFromLocalStorage(id);
}


// edit function
function editItem(e) {
    let element = e.currentTarget.parentElement.previousElementSibling;
    // console.log(element);
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // console.log(editElement);

    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submit_btn.textContent = 'edit';
}


// set back to default
function setBackToDefault() {
    console.log('set back to default');
    grocery.value = '';
    editFlag = false;
    editID = '';
    submit_btn.textContent = 'submit';
}

// add to local storage

function addToLocalStorage(id, value) {

    let grocery = { id, value };
    let items = getLocalStorage()
    console.log(items);

    items.push(grocery)
    localStorage.setItem('list', JSON.stringify(items));
}

// get from local storage

function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}


// remove from local storage function

function removeFromLocalStorage(id) {
    // console.log(id);

    let items = getLocalStorage();
    items.filter(function (item) {
        if (item.id !== id) {
            return item
        }
    })

    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    console.log(id, value);
    let items = getLocalStorage();
    items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });

    localStorage.setItem('list', JSON.stringify(items));
}






function setupItem() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container');
    }
}

function createListItem(id, value) {

    let element = document.createElement('article');
    element.classList.add('grocery-item');

    let attr = document.createAttribute('data-id');
    attr.value = id;
    element.classList.add('grocery-item');

    element.innerHTML = `<p class="tittle">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>`;

    // selection for button delete or edit buttons

    let deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);
    let editBtn = document.querySelector('.edit-btn');
    editBtn.addEventListener('click', editItem);

    // append child
    list.appendChild(element);


}