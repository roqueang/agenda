const name_contact = document.querySelector('#name_contact')
const number_contact = document.querySelector('#number_contact')
const btnAdd = document.querySelector('#btn_Add')
const btnDelete = document.getElementsByClassName('delete')

btnAdd.addEventListener('click', function(){
    window.location.href = `add/${name_contact.value}/${number_contact.value}`;
})

for(let i of btnDelete){
    i.addEventListener('click', function(){
        let id = this.getAttribute('id')
        window.location.href = `delete/${id}`
    })
}