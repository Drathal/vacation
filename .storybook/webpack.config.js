const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env)



    config.watchOptions = {
        poll: 100
    }

    return config
}
