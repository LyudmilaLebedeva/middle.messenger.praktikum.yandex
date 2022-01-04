import Handlebars from 'handlebars';
import '../index.scss'

import '../../components/form'
import '../../components/container'

const formProps = {
    title: 'Enter',
    inputs: [
        {
            label: "Login"
        },
        {
            label: "Password"
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
