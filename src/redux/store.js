let store = {
    _state: {
        projects: [
            {
                id: 0,
                name: 'To Do List',
                img: 'https://reactjsexample.com/content/images/2019/01/todo.jpg',
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!" +
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!",
                address: '',
                technologies: [
                    { id: 0, name: 'JS' },
                    { id: 1, name: 'HTML' },
                    { id: 2, name: 'CSS' },
                    { id: 3, name: 'npm' },
                    { id: 4, name: 'SCSS' },
                    { id: 5, name: 'yarn' },
                    { id: 6, name: 'React' },
                    { id: 7, name: 'NodeJS' },
                    { id: 8, name: 'Webpack' },
                    { id: 9, name: 'Docker' },
                    { id: 10, name: 'Fastify' }
                ]
            },
            {
                id: 1,
                name: 'Social Network',
                img: 'https://www.instamobile.io/wp-content/uploads/2019/11/facebook-clone-app-cover-800x600.png',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!" +\n' +
                    '                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!" +\n' +
                    '                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tenetur!',
                address: 'https://react-social-network-gules.vercel.app/',
                technologies: [
                    { id: 0, name: 'JS' },
                    { id: 1, name: 'HTML' },
                    { id: 2, name: 'CSS' },
                    { id: 3, name: 'MongoDB' },
                    { id: 4, name: 'Express' },
                    { id: 5, name: 'Vue' },
                    { id: 6, name: 'Tailwind' }
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