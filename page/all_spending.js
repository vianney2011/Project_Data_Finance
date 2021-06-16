const b_spending = document.getElementById("b_spending");
const spending = document.getElementById('spending')
const b_types = document.getElementById("b_types");
const types = document.getElementById('types')
const b_changes = document.getElementById("b_changes");
const changes = document.getElementById('changes')
const b_department = document.getElementById("b_department");
const department = document.getElementById('department')


b_spending.addEventListener("click", function()  {
    visible = true;
    visible ? spending.classList.add('visible') : spending.classList.remove('visible');
    types.classList.remove('visible');
    changes.classList.remove('visible');
    department.classList.remove('visible');
})
b_types.addEventListener("click", function()  {
    visible = true;
    visible ? types.classList.add('visible') : types.classList.remove('visible');
    spending.classList.remove('visible');
    changes.classList.remove('visible');
    department.classList.remove('visible');
})
b_changes.addEventListener("click", function()  {
    visible = true;
    visible ? changes.classList.add('visible') : changes.classList.remove('visible');
    spending.classList.remove('visible');
    types.classList.remove('visible');
    department.classList.remove('visible');
})
b_department.addEventListener("click", function()  {
    visible = true;
    visible ? department.classList.add('visible') : department.classList.remove('visible');
    spending.classList.remove('visible');
    types.classList.remove('visible');
    changes.classList.remove('visible');
})
