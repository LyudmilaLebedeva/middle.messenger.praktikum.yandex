import Handlebars from 'handlebars'

const templateString = `

<input class="form__submit"  value={{value}} type="submit">

`

Handlebars.registerPartial('submit', templateString);