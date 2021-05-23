## Table of Contents

- [Versions](#versions)
- [Live site](#live)
- [Quick Start](#quick-start)
- [Browser Support](#browser-support)
- [File Structure](#file-structure)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Versions

V 1.0.0

## Live

- [Demo site](https://kitty-tinder.vercel.app/)

## Quick start

Quick start options:

- Clone the repo: `git clone https://github.com/onsare/kitty-tinder.git`.
- `npm i` Installs the dependencies.
- Locate .env.example file, rename it to .env while adding your https://thecatapi.com api_key inside
- `npm run dev` Run app in development mode.
- `npm run build` Build app for production.

## File Structure

Within the download you'll find the following directories and files:

```
https://github.com/onsare/kitty-tinder.git
.
├── components
│   ├── Actions
│   │   ├── Dislike.js
│   │   ├── index.js
│   │   ├── Like.js
│   │   ├── Rewind.js
│   │   └── Superlike.js
│   ├── Chats
│   │   └── index.js
│   ├── Decks
|   |   ├── Card.js
│   │   └── Index.js
│   ├── Layout
|   |   ├── Header.js
│   │   └── index.js
├── context
│   └── AppContext.js
├── lib
│   └── index.js
├── pages
│   ├── _app.js
│   ├── chat.js
│   ├── index.js
│   └── profile.js
├── public
├── styles
│   ├── Chat.module.css
│   ├── global.css
│   ├── Home.module.css
│   └── Profile.module.css
├── utils
│   └── useLocalStorageHook.js
├── .env.example
├── .gitignore
├── package.json
├── README.md

```

## Browser Support

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Licensing

- MIT

## Useful Links

https://nextjs.org/docs
