import Handlebars from 'handlebars'

const templateString = `
<div class="form__input-blok">
    <label class="form__label">{{label}}</label>
    <input class="form__input" name={{name}} value={{value}}>
    <p class="form__error">{{error}}</p>
</div>
`

Handlebars.registerPartial('input', templateString);