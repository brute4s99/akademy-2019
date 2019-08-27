module.exports = {
    pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            runtimeCaching: [{
                urlPattern: new RegExp('https://conf.kde.org/en/Akademy2019/public/schedule.json'),
                handler: 'staleWhileRevalidate'
            }],
            skipWaiting: true,
            clientsClaim: true,
        }
    },
    publicPath: "akademy-2019"
}