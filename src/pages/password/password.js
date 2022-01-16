import Handlebars from 'handlebars';
import '../index.scss'

import '../../components/form'
import '../../components/container'

const formProps = {
    title: 'Change password',
    inputs: [
        {
            label: "Old password",
            name: "oldPpassword",
        },
        {
            label: "New passwod",
            name: "newPpassword",
        },
    ],
    submit: {
        value: "Change"
    }
}


document.body.insertAdjacentHTML(
    'beforeend',
    Handlebars.compile('{{>container}}')( {content: 'form', contentProps: formProps} ) 
);