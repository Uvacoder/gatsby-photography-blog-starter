const environment = {
  URL: process.env.CF_PAGES == 1 ?
      process.env.CF_PAGES_URL :
    'http://localhost:8000'
}
export default environment
