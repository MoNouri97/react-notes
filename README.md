# React Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

A simple note taking app using React .
This project was first created using Angular , this is my attempt at re-creating it with React.

## Features

- saving notes
- Editing and Removing
- Searching

the search feature filters the notes to only show ones containing at least one word in the search query , then the notes are **sorted by relevancy** (the ones with more matches are first on the list).

**[See Screenshot below](###Search)**

The app is using local storage to save notes

```ts
const updateStorage = () => {
	localStorage.setItem('notes', JSON.stringify(notes));
};
```

## UI

Designed using Bulma CSS framework **with some customization**,
[All Styles are here](src/App.scss)
And used `react-transition-group` for the the animations

### Home

![screenshot](<screenshots/Screenshot from 2020-04-29 20-48-38.png> 'Main screen')

### Edit / View Note

![screenshot](<screenshots/Screenshot from 2020-04-29 20-52-09.png> 'Note screen')

## Challenges & Solutions

Transferring the UI and the logic from angular to react was not that hard but still some things were interesting:

- **Services & Global State :** I used react Hooks and the Context API
- **TS & Strong Typing :** In this project i wanted to try react with TypeScript instead of vanilla JS , thankfully the `create-react-app` has a ts template to help me start. And I also made great use of PropTypes
- **Animations :** I'm still not completely satisfied with this but i ended up using react-transition-group to replicate what i did with angular animations, the result is not bad but also not perfect

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.
