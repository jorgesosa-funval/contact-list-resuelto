const modal = document.querySelector('#modal');
const addContactBtn = document.querySelector('#addContactBtn')
const closeModal = document.querySelector('.close')
const contact_list = document.querySelector('.contact-list');
const contactForm = document.querySelector('#contactForm')
/* Global varibles */
let contacts = [
    {
        id: 1,
        name: 'Ronnnie Santoyo',
        email: 'rn@example.com',
        phone: '882-231-3322'
    },
    {
        id: 2,
        name: 'Bryan Gomez',
        email: 'bg@example.com',
        phone: '882-231-4411'
    },

]

showContacts();


/* Functions */

/** 
    @description  Función para mostrar y ocultar el modal 
*/
function toggleModal() {
    modal.classList.toggle('hidden')
}

/** 
    @description Esta duncion carga la lista de contactos desde el array
*/
function showContacts() {
    contact_list.innerHTML = ''
    for (let i = 0; i < contacts.length; i++) {
        const contact_template = `
        <li class="contact">
               <span class="name">${contacts[i].name}</span>
               <span class="details">${contacts[i].email} - ${contacts[i].phone}</span>
         </li>
       `
        contact_list.innerHTML += contact_template;
    }
}

function newContact(e) {
    e.preventDefault();
    const data = new FormData(contactForm)

    contacts.push({
        id: contacts[contacts.length -1]?.id + 1 || 1,
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone')
    });
    
    showContacts();
    contactForm.reset()
    toggleModal()
}






/* Eventos*/
addContactBtn.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);
contactForm.addEventListener('submit', newContact)