let store = {
    _state: {
        projects: [
            {
                id: 0,
                name: 'To Do List',
                img: 'https://sun9-3.userapi.com/impg/PGP1z8Aic9T2IhGt-8nGOvBCDQinRbvbHWKTNw/jGylwXVgV6o.jpg?size=490x784&quality=96&sign=fa0fc655178483f25c48f44cd2c90d39&type=album',
                info: "Created using React library. As the name implies, To-Do List allows user to create tasks for themselves which they can then mark as completed and delete. This app also uses REST API. The actions done by user create a request to a remote API named mockapi.io. Almost all C.R.U.D (besides Update) actions can be performed in this app.",
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
                    { id: 10, name: 'Responsive' }
                ]
            },
            {
                id: 1,
                name: 'Social Network',
                img: 'https://www.instamobile.io/wp-content/uploads/2019/11/facebook-clone-app-cover-800x600.png',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!" +\n' +
                    '                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!" +\n' +
                    '                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!',
                source: 'https://github.com/y2k01/react-social-network',
                address: 'https://react-social-network-gules.vercel.app/',
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
                ]
            },
            {
                id: 2,
                name: 'Grocery Store',
                img: 'https://sun9-71.userapi.com/impg/HMKyeNoDHmM_LMmC6zqDhtFVKQfTEFlLxUrj0A/N6OS0vXv2ew.jpg?size=507x783&quality=96&sign=063538befdaa9e8a82685e1e3e0209fe&type=album',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!" +\n' +
                    '                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!" +\n' +
                    '                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!',
                source: 'https://github.com/y2k01/react-grocery-store',
                address: 'https://react-grocery-store-sigma.vercel.app/',
                technologies: [
                    { id: 0, name: 'JS' },
                    { id: 1, name: 'HTML' },
                    { id: 2, name: 'CSS' },
                    { id: 3, name: 'React' },
                    { id: 4, name: 'Redux' },
                    { id: 5, name: 'AJAX' },
                    { id: 6, name: 'SCSS' },
                    { id: 7, name: 'npm' },
                    { id: 8, name: 'CSS Grid' },
                    { id: 9, name: 'CSS Flexbox' },
                    { id: 10, name: 'Responsive' },
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