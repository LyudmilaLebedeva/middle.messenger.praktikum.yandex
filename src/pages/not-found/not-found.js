import Handlebars from 'handlebars';
import '../index.scss'

import '../../components/server-error'
import '../../components/container'

const serverErrorProps = {
    code: "Error 404",
    message: "This page is not found",
    link: {
        text: "Go to main page"
    }
}


document.body.insertAdjacentHTML(
    'beforeend',
    Handlebars.compile('{{>container}}')( {content: 'serverError', contentProps: serverErrorProps} ) 
);


