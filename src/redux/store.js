import mapPreview from './../assets/images/map-preview.png'
import storePreview from './../assets/images/store-preview.png'
import todolistPreview from './../assets/images/todolist-preview.png'

let store = {
    _state: {
        projects: [
            {
                id: 0,
                name: 'To Do List',
                img: todolistPreview,
                info: `Created using React library. As the name implies, To-Do List allows user to create tasks for themselves which they can then mark as completed and delete. This app also uses REST API. The actions done by user create a request to a remote API named mockapi.io. Almost all C.R.U.D (besides Update) actions can be performed in this app.`,
                source: 'https://github.com/y2k01/todolist',
                address: 'https://todolist-23dgks0r1-y2k01.vercel.app/',
                technologies: [
                    { id: 0, name: 'JS' },
                    { id: 1, name: 'HTML' },
                    { id: 2, name: 'CSS' },
                    { id: 3, name: 'SCSS' },
                    { id: 4, name: 'React' },
                    { id: 5, name: 'Redux' },
                    { id: 6, name: 'AJAX' },
                    { id: 7, name: 'npm' },
                    { id: 8, name: 'CSS Grid' },
                    { id: 9, name: 'CSS Flexbox' },
                    { id: 10, name: 'Responsive' },
                    { id: 11, name: 'REST API' },
                    { id: 12, name: 'axios' },
                ]
            },
            {
                id: 1,
                name: 'Administrative divisions of Estonia',
                img: mapPreview,
                info: 'This is map that shows all counties of Estonia. The client fetches data from a remote API and puts it in the table down below the map. This project was interesting to do. I have learnt a lot about SVG and also it was my first RESTful application.',
                source: 'https://github.com/y2k01/administrative-divisions-of-estonia',
                address: 'https://administrative-divisions-of-estonia.vercel.app/',
                technologies: [
                    { id: 0, name: 'JS' },
                    { id: 1, name: 'HTML' },
                    { id: 2, name: 'CSS' },
                    { id: 3, name: 'React' },
                    { id: 4, name: 'Redux' },
                    { id: 5, name: 'API' },
                    { id: 6, name: 'AJAX' },
                    { id: 8, name: 'CSS Grid' },
                    { id: 9, name: 'CSS Flexbox' },
                    { id: 10, name: 'Responsive' },
                    { id: 11, name: 'SVG' },
                    { id: 12, name: 'REST API' },
                    { id: 13, name: 'axios' },
                ]
            },
            {
                id: 2,
                name: 'Grocery Store',
                img: storePreview,
                info: 'This is so far my most ambitious project. I am planning to build a fully working online clothing store. I am currently working on the frontend and using free API. As soon as I am done with the frontend I am going to start creating my own API. Right now you can search for items and put them in the cart. I am working on this project almost everyday and planning to defend a thesis with this project.',
                source: 'https://github.com/y2k01/react-grocery-store',
                address: 'https://react-grocery-store-sigma.vercel.app/',
                technologies: [
                    { id: 0, name: 'JS' },
                    { id: 1, name: 'HTML' },
                    { id: 2, name: 'CSS' },
                    { id: 3, name: 'React' },
                    { id: 4, name: 'React Router'},
                    { id: 5, name: 'Redux' },
                    { id: 6, name: 'AJAX' },
                    { id: 7, name: 'SCSS' },
                    { id: 8, name: 'npm' },
                    { id: 9, name: 'CSS Grid' },
                    { id: 10, name: 'CSS Flexbox' },
                    { id: 11, name: 'Responsive' },
                    { id: 12, name: 'axios' },
                    { id: 13, name: 'API' },
                ]
            },
        ]
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store