import Handlebars from 'handlebars'

const templateString = `

<button class="server-error__link">{{text}}</button>

`

Handlebars.registerPartial('link', templateString);