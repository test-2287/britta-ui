module.exports = {
    base: '/britta-ui',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guid', link: '/guid'},
            {text: 'Externals', link: 'https://google.com'}
        ],
        sidebar: [
            '/',
            // '/page-a',
            // ['/page-b/card.md','Explicit link text'],
            // '/docs/card.md'
            '/componentDocs/card'

          ]
    }
}