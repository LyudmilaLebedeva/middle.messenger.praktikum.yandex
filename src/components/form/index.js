import Handlebars from 'handlebars'

import './submit'
import './input'
import './link'

import './index.scss'

const templateString = `
<form class="form">
    <h3 class="form__title">{{title}}</h3>
    {{#each inputs}}
        {{>input this}}
    {{/each}}
    {{>submit submit}}
    {{>link link}}
</form>
`

Handlebars.registerPartial('form', templateString);