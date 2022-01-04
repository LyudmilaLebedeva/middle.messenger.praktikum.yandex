import Handlebars from 'handlebars'

const templateString = `
<div class="form__input-blok">
    <label class="form__label">{{label}}</label>
    <input class="form__input" class="form__input" value={{value}}>
    <p class="form__error">Error</p>
</div>
`

Handlebars.registerPartial('input', templateString);