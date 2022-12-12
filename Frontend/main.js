let form = document.getElementById('my-form');
let itemList = document.getElementById('users');

//-------Display the data from server to UI after each time refresh screen
//axios.get request to gitting data from crudcrud to UI.

window.addEventListener('DOMContentLoaded', () => {
    axios.get("http://localhost:3000/user/get-user")
        .then((response) => {
            // console.log(response.data.allUsers);
            response.data.allUsers.forEach((ele) => {
                showNewUserOnscreen(ele);
                // console.log(ele.name);
            })
        })
        .catch((err) => {
            console.log(err);
        })
})

//form submit event:
form.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    // if (name == "" || email == "" || phone == "") {
    //     return alert("field is empty?");
    // }


    let obj = {
        name,
        phone,
        email
    };
    postRequest = async () => {
        try {

            //add new data server as well as in UI.
            const responce = await axios.post("http://localhost:3000/user/add-user", obj);
            console.log(responce);
            console.log(responce.data.newUserDetail);
            // console.log(JSON.parse(responce.config.data));
            showNewUserOnscreen(responce.data.newUserDetail);
            return;
        } catch (err) {
            document.body.innerHTML += "<h4>Something went wrong !</h4>";
            console.log(err);
        }
    }
    postRequest();
}

//delete itam event
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        li = e.target.parentElement;
        // let id = li.childNodes[0].textContent;
        // itemList.removeChild(li);
        // console.log(id);
        // id = 500;
        // console.log(li.dataset.id);
        let id = li.dataset.id;

        deleteData(id,li);
    }
}

//delete data from UI and Server as well.
deleteData = async (id,li) => {
    try {
        const users = await axios.delete(`http://localhost:3000/user/delete-user/${id}`);
        itemList.removeChild(li);
    } catch (err) {
        document.body.innerHTML += "<h4>Something went wrong !</h4>";
        console.log(err);
    }
}

//for display list on screen
function showNewUserOnscreen(obj) {
    let li = document.createElement('li');
    li.setAttribute('data-id', obj.id);
    li.style.backgroundColor = '#c05e5e';
    li.style.color = 'white';

    // li.appendChild(document.createTextNode(obj.id));
    // li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(obj.name));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(obj.email));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(obj.phone));
    // li.childNodes[0].textContent.style.display = 'none' ;
    // console.log(li.childNodes[0].textContent);
    itemList.appendChild(li);

    //make empty name and email for new user 
    let val = document.querySelector('#name');
    let val2 = document.querySelector('#email');
    let val3 = document.querySelector('#phone');
    val.value = null;
    val2.value = null;
    val3.value = null;

    //delete and edit button creating.
    delEdit(li);
    itemList.appendChild(li);
}

//edit button event
itemList.addEventListener('click', editItam);

function editItam(e) {
    if (e.target.classList.contains('edit')) {
        // console.log(1);
        li = e.target.parentElement;
        let nameVal = li.childNodes[0].textContent;
        let emailVal = li.childNodes[2].textContent;
        let phoneVal = li.childNodes[4].textContent;
        const id = li.dataset.id;

        deleteData(id,li);

        // // console.log(nameVal);
        // // console.log(emailVal);
        let name = document.getElementById('name');
        let phone = document.getElementById('phone');
        let email = document.getElementById('email');

        name.value = nameVal;
        email.value = emailVal;
        phone.value = phoneVal;
    }
}

//function for delete and edit button.
function delEdit(li) {
    let del = document.createElement('button');
    let edit = document.createElement('button');
    del.className = "delete";
    edit.className = "edit";
    del.appendChild(document.createTextNode('Delete'));
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(del);
    li.appendChild(edit);
}










