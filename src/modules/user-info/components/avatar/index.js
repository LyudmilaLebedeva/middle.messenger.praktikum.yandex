import Handlebars from 'handlebars';

const templateString = `
    <image class="user-info__avatar">
`
Handlebars.registerPartial('userInfoAvatar', templateString)