
const curlconverter = import('curlconverter');

function main() {
    console.log(get_info_login())
    connect_api(get_info_login())
}

function get_info_login() {
    const form = document.querySelector('#form_login')
    const element_login = []
    element_login.push(form.elements[0].value, form.elements[1].value)
    return element_login
}

function connect_api(info_login) {

}


main()