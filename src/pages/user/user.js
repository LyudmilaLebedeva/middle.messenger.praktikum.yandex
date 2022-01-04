import Handlebars from 'handlebars';
import '../index.scss'

import '../../components/form'
import '../../components/container'
import '../../modules/user-info'

const formProps = {

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
            label: "Nick"
        },
        {
            label: "Last name"
        },
        {
            label: "Phone"
        },
    ],
    link: {
        text: "Change password"
    },
    submit: {
        value: "Save changes"
    }
}

document.body.insertAdjacentHTML(
    'beforeend',
    Handlebars.compile('{{>container}}')( {
        content: 'userInfo', 
        contentProps: {formProps, avatarProps: {}}
    } ) 
);