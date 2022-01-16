import Handlebars from 'handlebars';
import '../index.scss'

import '../../components/form'
import '../../components/container'
import '../../modules/user-info'

import avatar from './no-photo.jpg'

const formProps = {
    title: "Edit profile",
    inputs: [
        {
            label: "First name",
            name: "first_name",
            value: "Masha",
        },
        {
            label: "Second name",
            name: "second_name",
            value: "Ivanova",
        },
        {
            label: "Display name",
            name: "display_name",
            value: "Mary",
        },
        {
            label: "Login",
            name: "login",
            value: "noname777",
        },
        {
            label: "E-mail",
            name: "email",
            value: "masha@pochta.ru",
        },
        {
            label: "Phone",
            name: "phone",
            value: "+7(999)777-77-77",
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
        contentProps: {formProps, avatarProps: { src: avatar }}
    } ) 
);
