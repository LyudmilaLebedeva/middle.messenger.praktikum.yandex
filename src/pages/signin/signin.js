import Handlebars from 'handlebars';
import '../index.scss'

import '../../components/form'
import '../../components/container'

const formProps = {
    title: 'Sky chat',
    inputs: [
        {
            label: "Login",
            name: "login",
            error: "Uncorrect"
        },
        {
            label: "Password",
            name: "password",
        }
    ],
    link: {
        text: "Create account"
    },
    submit: {
        value: 'Enter',
    },
    error: "Server error"
}


document.body.insertAdjacentHTML(
    'beforeend',
    Handlebars.compile('{{>container}}')( {content: 'form', contentProps: formProps} ) 
);

