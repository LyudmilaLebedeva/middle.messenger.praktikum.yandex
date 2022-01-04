import Handlebars from 'handlebars'

const templateString = `

<input class="form__submit" type="submit" value={{value}}>

`

Handlebars.registerPartial('submit', templateString);