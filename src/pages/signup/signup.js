import Handlebars from 'handlebars';
import '../index.scss'

import '../../components/form'
import '../../components/container'

const formProps = {
    title: 'Create account',
    inputs: [
        {
            label: "First name",
            name: "first_name",
        },
        {
            label: "Second name",
            name: "second_name",
        },
        {
            label: "Login",
            name: "login",
        },
        {
            label: "E-mail",
            name: "email",
        },
        {
            label: "Password",
            name: "password",
        },
        {
            label: "Phone",
            name: "phone",
        },
    ],
    link: {
        text: "Already registered?"
    },
    submit: {
        value: "Registration"
    }
}


document.body.insertAdjacentHTML(
    'beforeend',
    Handlebars.compile('{{>container}}')( {content: 'form', contentProps: formProps} ) 
);