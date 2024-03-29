# Зеркало Reddit c новостной лентой

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width='30'/>

SPA-приложение, написанное на [Next.js](https://nextjs.org/) с использованием [API Reddit](https://www.reddit.com/dev/api/) и протокола авторизации [OAuth2](https://github.com/reddit-archive/reddit/wiki/OAuth2).

Приложение использует SSR (Server-Side Rendering) - все данные получаются на стороне сервера.

Принцип Mobile First

## Описание
Приложение представляет собой "Личный кабинет" с возможностью просмотреть новостную ленту из 25 лучших постов на [Reddit](https://www.reddit.com/).
Для просмотра новостной ленты необходимо иметь активный аккаунт на [www.reddit.com](https://www.reddit.com/) и пройти авторизоваться на странице приложения.

При нажатии на ссылку "Авторизоваться" происходит переадресация на URL-адрес авторизации `Reddit`. Пользователь должен сообщить `reddit.com`, что он согласен с тем, что приложение получит доступ к определенным данным от имени пользователя. Вам будет показано, к каким данным приложение просит получить доступ: в данном приложении используется запрос к следующим областям видимости:
* read - чтение постов от имени пользователя
* identity - получение ника и данных о пользователе для отображения иконки аккаунта и имени пользователя

После авторизации вас переадресует на главную страницу приложения, где будет доступно просмотреть новостную ленту из 25 лучших постов на [Reddit](https://www.reddit.com/) в виде новостных карточек с `заголовком поста`, `датой создания поста`, `автором поста`, `картинкой поста` , а также `количеством голосов/лайков поста` и `количеством комментариев к посту` (в мобильной версии). Также будет отображена иконка и имя авторизованного пользователя.

При нажатии на карточку поста открывается страница с конкретным постом, которая содержит: 
- информацию о посте с `заголовком поста`, `ссылкой на пост` [на офциальном сайте Reddit](https://www.reddit.com/), а также `медиа-частью` (в виде картинки или видео) и подробным `описанием` поста (если оно есть) 
- информацией о сообществе (subreddit), в котором опубликован данный пост c `названием сообщества`, `картинкой сообщества`, `иконкой сообщества`, `количеством подписчиков`, и `ссылкой` на сообщество на [ официальном сайте Reddit](https://www.reddit.com/)
- кнопка "Go Home" для Возварта на главную страницу

## Технологии
- [Next.js v.13.4.4](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-scss.ru/)
- [axios](https://axios-http.com/ru/)
- [Framer Motion](https://www.framer.com/motion/)
- [cookies-next](https://github.com/andreizanik/cookies-next)
- [react-spinners](https://www.davidhu.io/react-spinners/)
