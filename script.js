// localStorage.setItem("name", "Pam In");
// document.getElementById("name").innerHTML = localStorage.getItem("name");

// localStorage.setItem("addr", "180 m12");
// document.getElementById("addr").innerHTML = localStorage.getItem("addr");

// localStorage.setItem("tel", "+6688775544");
// document.getElementById("tel").innerHTML = localStorage.getItem("tel");

// localStorage.setItem("action", "Action");
// document.getElementById("action").innerHTML = localStorage.getItem("action");

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == null || username == "") {
        alert("Please enter the Username.");
        return false;
    }
    
    if (password == null || password == "") {
        alert("Please enter the Password.");
        return false;
    }
    alert('Login successful');
    // window.location.href="index.html";
} 

let userSelectd = null;

function Read() {
    let data = {};
    data["txtName"] = document.getElementById("txtName").value;
    data["txtAddress"] = document.getElementById("txtAddress").value;
    data["txtTel"] = document.getElementById("txtTel").value;
    return data;
}

function FormSubmit() {
    let formData = Read();
    if (userSelectd == null) {
        Create(formData);
    }
    else {
        Update(formData);
    }
    ClearForm();
}

function Create(data) {
    var table = document.getElementById("tblContact") .getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.txtName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.txtAddress;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.txtTel;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="Edit(this)"><img src="/img/edit-icon.png" height="32px" /></a>`;
    
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="Delete(this)">Delete</a>`;



}


function Edit(td) {
    userSelectd = td.parentElement.parentElement;
    document.getElementById("txtName").value = userSelectd.cells[0].innerHTML;
    document.getElementById("txtAddress").value = userSelectd.cells[1].innerHTML;
    document.getElementById("txtTel").value = userSelectd.cells[2].innerHTML;
}

function Update(formData) {
    userSelectd.cells[0].innerHTML = formData.txtName;
    userSelectd.cells[1].innerHTML = formData.txtAddress;
    userSelectd.cells[2].innerHTML = formData.txtTel;
}   

function Delete (td) {
    if (confirm('คุณต้องลบข้อมูล?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tblContact").deleteRow(row.rowIndex);

        ClearForm();
    }
}

function ClearForm() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtTel").value = "";

    userSelectd = null;
}

