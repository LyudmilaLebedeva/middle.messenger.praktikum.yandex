import Handlebars from 'handlebars'

import './link'

import './index.scss'

const templateString = `
<div class="server-error">
    <h3 class="server-error__code">{{code}}</h3>
    <p class="server-error__message">{{message}}</p>
    {{>link link}}
</div>
`

Handlebars.registerPartial('serverError', templateString);