/* eslint-disable global-require */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                //     banner: "url('/src/Assets/banner.png')",
                hero: "url('https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000@h=800&q=80')",
            },
            fontFamily: {
                josefin: ['Josefin Sans', 'sans-serif'],
                karla: ['Karla', 'sans-serif'],
                raleway: ['Raleway', 'sans-serif'],
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#075985',
                    secondary: '#c08c4d',
                    accent: '#707070',
                    black: '#2d2a2a',
                    'base-100': '#ffffff',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
