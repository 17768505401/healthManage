const env = process.env.NODE_ENV
let baseUrl
switch (env) {
  case 'production':
    baseUrl = 'http://10.16.7.65:8082'
    // baseUrl = 'https://tkyljs.top'
    break
  case 'development':
    baseUrl = 'http://10.16.8.55:8082/health/test'
    break
}
const baseConfig = {
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
}
export default baseConfig