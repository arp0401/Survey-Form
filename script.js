console.log('Customer Service Survey');

function submitForm() {
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;

    console.log('Name: ' + name);
    console.log('Email:' + email);
    console.log('Message: ' + message);

    document.querySelector('.name').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.message').value = '';

    alert('Thank you for yor feedback');
}

function print_current_page() {
    window.print();
}