import Handlebars from 'handlebars';


const templateString = `
    <image class="user-info__avatar" src={{src}}>
`
Handlebars.registerPartial('userInfoAvatar', templateString)