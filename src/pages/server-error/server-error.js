import Handlebars from 'handlebars';
import '../index.scss'

import '../../components/server-error'
import '../../components/container'

const serverErrorProps = {
    code: "500",
    message: "Server Error",
    link: {
        text: "Go to main page"
    }
}


document.body.insertAdjacentHTML(
    'beforeend',
    Handlebars.compile('{{>container}}')( {content: 'serverError', contentProps: serverErrorProps} ) 
);


