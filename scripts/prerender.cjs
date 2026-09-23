const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, '..', 'web', 'dist')
const indexPath = path.join(distDir, 'index.html')
const html = fs.readFileSync(indexPath, 'utf8')

const appHtml = `
<div style="padding: 2rem; font-family: system-ui, sans-serif;">
  <h1>RedwoodJS (SSG)</h1>
  <p>Hello from a statically pre-rendered RedwoodJS project.</p>
</div>
`

const finalHtml = html.replace(
  '<div id="redwood-app"></div>',
  `<div id="redwood-app">${appHtml}</div>`
)

fs.writeFileSync(indexPath, finalHtml)
console.log('Prerendered / -> web/dist/index.html')
