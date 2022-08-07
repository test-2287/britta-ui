const { VueLoaderPlugin } = require('vue-loader')
const glob = require('glob')
const path = require('path')

const list = {};
// {
//     card: './components/lib/card/index.js',
//     demo: './components/lib/demo/index.js'
// }

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`)
    for(let file of files) {
        const component = file.split(/[/.]/)[2]
        list[component] = `./${file}`
    }
    console.log(list);
}

makeList('components/lib', list)


module.exports = {
    mode: 'development',
    entry: list,
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    }
}