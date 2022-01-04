import Handlebars from 'handlebars';
import '../index.scss'

import '../../components/form'
import '../../components/container'

const formProps = {
    title: 'Registation',
    inputs: [
        {
            label: "E-mail"
        },
        {
            label: "Login"
        },
        {
            label: "Name"
        },
        {
            label: "Last name"
        },
        {
            label: "Phone"
        },
        {
            label: "Password"
        },
        {
            label: "Repeat password"
        }
    ],
    link: {
        text: "Sigin in"
    },
    submit: {
        value: "Submit"
    }
}


document.body.insertAdjacentHTML(
    'beforeend',
    Handlebars.compile('{{>container}}')( {content: 'form', contentProps: formProps} ) 
);