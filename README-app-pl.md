### `yarn install` - installs e.g. node modules

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




# Porady z  
https://typeofweb.com/tworzenie-aplikacji-react-js-dzieki-create-react-app/


## Początek z create-react-app
Zakładam, że znasz podstawy pracy z node i masz zainstalowany npm przynajmniej 5.2 lub nowszy.

Tego wszystkiego i znacznie więcej nauczymy Cię na szkoleniu: Sprawdź szkolenia Type of Web z React!

Pracę z create-react-app zaczynamy od wrzucenia na głęboką wodę. Hop, robimy od razu projekt w React:

`npx create-react-app react-test-create-react-app`
Creating a new React app in /Users/michal/htdocs/react-test-create-react-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...
Jak widzisz — instalują się paczki, których nazwy brzmią znajomo — react i react-dom. Dalej jest trochę więcej logów… i wreszcie instalacja zakończona, projekt stworzony! Gotowe. To już.


## Narzędzia
Po zakończeniu instalacji, Twoim oczom ukazuje się instrukcja z komendami, z których możesz korzystać. Wejdź do folderu react-test-create-react-app i wtedy możesz korzystać z takich poleceń:

`npm start` — uruchamia serwer deweloperski — będziemy z tego polecenia korzystać najczęściej
`npm run build` — buduje wersję produkcyjną gotowej aplikacji — ten kod wrzucasz na serwer
`npm test` — odpala testy
`npm run eject` — usuwa create-react-app i kopiuje wszystkie pliki konfiguracyjne do projektu. Dzięki temu możesz je dowolnie zmodyfikować, ale nie będziesz już mógł korzystać z aktualizacji do create-react-app. Na razie tego nie używaj
`npm run deploy` - wypycha projekt na podane repozytorium, w tym wypadku github

## Build
A teraz spróbuj `npm run build` . Po chwili zobaczysz komunikat informujący, że wszystko przebiegło pomyślnie oraz rozmiary i nazwy wygenerowanych plików. Nazwy zawierają pewien trochę losowy ciąg (hasz), np. w moim przypadku jest to main.35d639b7.js i main.c17080f1.css. Jeśli zmienisz coś w tych plikach, nazwy również się zmienią — dzięki czemu nie masz problemów z cachem przeglądarek (tzw. cache busting).

W folderze build znajdziesz gotowy projekt, który możesz wrzucić na serwer i przetestować (albo po prostu odpalić lokalnie).


## Changelog - aktualizacje
https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md

## Push na Github  
wg https://typeofweb.com/react-js-na-github-pages-dzieki-create-react-app/ 
Patrz też: https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom 
Zainstaluj pomocniczą paczkę gh-pages.
Jest to proste narzędzie do publikowania rzeczy na GitHubie. Jedno polecenie: 
`yarn add gh-pages`
Tu nie idzie `npm install --save-dev gh-pages` ponieważ npm nie jest dobrze skonfigurowane


Następnie dodaj dwa nowe skrypty do swojego package.json:

{
  "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d public",
      …
  }
}

oraz adres strony na github, np:
"homepage": "https://pmyszkier.github.io/react-first-app/",

po czym `yarn run deploy`
raczej nie stosować `npm run deploy`

jeśli wychodzi z błędami, to:
- przede wszystkim zupdatować git
`git remote -v` - jeśli nie ma żadnej odpowiedzi, to: 
`git remote add origin "your_github_repository_url"`
`git remote -v` - powinno podać listę

## Problemy typu:
a)
after command `gh-pages -d build` :

fatal: A branch named 'gh-pages' already exists.

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! myfirstreact@0.1.0 deploy: `gh-pages -d build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the myfirstreact@0.1.0 deploy script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Piotr\AppData\Roaming\npm-cache\_logs\2020-03-01T17_24_23_738Z-debug.log

b) upgrade node, npm and git:
- npm: run `npm install npm@latest -g`
- git: run `git update`
- node: in Windows download and install again

## Dodatkowe moduły do zainstalowania po wprowadzeniu Atomic:
`yarn add react-router-dom`
`yarn add styled-components`
`yarn add styled-theme`
`yarn add styled-tools`

## Testowanie
wg https://typeofweb.com/testowanie-aplikacji-react-js-podstawy-enzyme/
# Enzyme
`yarn add enzyme enzyme-adapter-react-16 react-test-renderer`
- utworzyć plik src/setupTests.js
- W tym samym pliku możesz też dodać np. globalne mocki — jeśli Ci będą potrzebne. Albo biblioteki, z których chcesz korzystać w testach.

# Jest
patrz: https://github.com/testing-library/jest-dom
- jest domyślnie zainstalowane w react
- zaleca się dodatkowo zainstalować eslint-plugin-jest-dom


Zadanie do wykonania:
1. Masz pole/formularz (input)
Jak wpiszę wartość i kliknę ENTER, to pojawia się kolejny input
Jak wpiszę i ENTER to kolejny Input, i tak razem dowolna ilość
Na górze przycisk sortuj. Jak wcisnę przycisk to pola sortują się w kolejności alfabetycznej.
2. Wykonać animację pomiędzy starym a nowym układem


Po zadaniu 20:
https://typeofweb.com/react-redux-kurs-wprowadzenie-i-podstawy/
`yarn add redux react-redux`


Opis:
1. Jeżeli nie ma klamry, tzn, że propsem jest string, w tym wypadku MyStuff:
return <div><ToDoList title="My Stuff" /></div>
2. Jeśli jest klamra, to znaczy, że w klamrze jest zmienna, w tym wypadku tablica:
return <div><ToDoList title='My Stuff' tasks={['Record a ReactJS video', 'Go for a walk']} /></div>
czy też:
return <div><ToDoList title='My Stuff' tasks={this.tasks} /></div>

{this.props.tasks.map(task => <div><p>{task}</p></div>)} - map iteruje po każdym elemencie tablicy tasks

propsy to parametry komponentu, których nie możemy zmieniać
jeżeli chcemy coś zmieniać, to wtedy stosujemy state

this.setState({draft: event.target.value}) - setState to sposób na ustawienie state w zależności od eventu

this.setState({tasks: lists, draft: ''}) - setState ustawia na nowo state


## SPOSOBY ZAPISU KOMPONENTÓW:
1. komponent funkcyjny (const):
np. https://github.com/Chmarusso/kurs-react-podstawy/blob/master/src/components/NewTodoForm/index.js 

import React from 'react';
import styled from 'styled-components'

const NewTodoForm = ({onChange, draft, onSubmit}) => (
  <Container>
    <TextInput placeholder='Type something...' type='text' onChange={onChange} value={draft} />
    <Button onClick={onSubmit}>+</Button>
  </Container>
)

export default NewTodoForm


2. class


## STRUKTURA PROJEKTU:

1. **src/components** - tutaj umieszczamy wszystkie komponenty
- każdy komponent ma swoją nazwę katalogu, a w nim plik index.js, styles.css i test.js np. 
**src/components/DateComponent/index.js**
**src/components/DateComponent/styles.css**
**src/components/DateComponent/test.js**

2. Z kolei wg Atomic design powinien być podział komponentów na:
**src/atoms**
**src/molecules**
**src/organisms**
**src/templates**
**src/pages**
patrz: 
https://github.com/diegohaz/arc/tree/master/src-example/components 
https://codeburst.io/atomic-design-with-react-e7aea8152957

2. 