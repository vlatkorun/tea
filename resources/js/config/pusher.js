export default {
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    logToConsole: process.env.MIX_PUSHER_LOG_TO_CONSOLE || false,
    encrypted: true,
}