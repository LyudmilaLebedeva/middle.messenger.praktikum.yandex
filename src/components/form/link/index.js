import Handlebars from 'handlebars'

const templateString = `

<button class="form__link">{{text}}</button>

`

Handlebars.registerPartial('link', templateString);