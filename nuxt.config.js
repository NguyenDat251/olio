const colors = require('vuetify/es5/util/colors').default

//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/magento', mode: 'server' },
        '~/plugins/swatch'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/vuetify',

        '@nuxtjs/dotenv'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',

        //'@nuxtjs/proxy'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: 'http://localhost:8000',
        //baseURL: 'http://localhost:3000'
        //proxy: true
    },
    // },
    // proxy: {
    //     '/api':
    //         { 
    //             target: 'https://ecom.liena.com.vn/rest/V1', 
    //             pathRewrite: {
    //             '^/api' : ''
    //             },
    //             changeOrigin: true
    //  }
    // },

    /*
    ** vuetify module configuration
    ** https://github.com/nuxt-community/vuetify-module
    */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        //theme: {
        //   dark: true,
        //   themes: {
        //     dark: {
        //       primary: colors.blue.darken2,
        //       accent: colors.grey.darken3,
        //       secondary: colors.amber.darken3,
        //       info: colors.teal.lighten1,
        //       warning: colors.amber.base,
        //       error: colors.deepOrange.accent4,
        //       success: colors.green.accent3
        //     }
        //   }
        // }

        theme: {
            //dark: true,
            themes: {
                light: {
                    primary: '#0d1d42'
                }
            }
        }
    },
    env: {

    },
    dotenv: {
        /* module options */
    },
    serverMiddleware: [
        // Will register redirect-ssl npm package
        //'redirect-ssl',
    
        // Will register file from project api directory to handle /api/* requires
        //{ path: 'http://localhost:3000/api', handler: 'api/index.js' },
    
        // We can create custom instances too
        //{ path: '/static2', handler: serveStatic(__dirname + '/static2') }
      ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
