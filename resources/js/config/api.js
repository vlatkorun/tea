export default {
    timeout: process.env.MIX_HTTP_TIMEOUT || 5000,
    apiUrl: process.env.MIX_API_URL || 'http://tea.local/api',
}