import Handlebars from 'handlebars'

import './index.scss'

Handlebars.registerHelper('content', (context)=>{
    return context.data.root.content
})

const templateString = `
<div class="container">
    <div class="container__content">
        {{#with contentProps}}
            {{> (content) }}
        {{/with}}
    </div>
</div>
`

Handlebars.registerPartial('container', templateString);