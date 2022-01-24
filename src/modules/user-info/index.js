import Handlebars from 'handlebars';
import './index.scss'

import '../../components/form'
import './components/avatar'

const templateString = `
{{#with avatarProps}}
    {{>userInfoAvatar}}
{{/with}}
{{#with formProps}}
    {{>form}}
{{/with}}
`
Handlebars.registerPartial('userInfo', templateString)
