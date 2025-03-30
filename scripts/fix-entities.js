const fs = require('fs')
const glob = require('glob')

const fixEntities = async () => {
  const files = await glob.sync('src/**/*.tsx')

  files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8')

    // Fix HTML entities in class names
    content = content.replace(
      /className=&quot;([^&"]*)&quot;/g,
      'className="$1"'
    )

    // Fix other HTML entities
    content = content
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')

    fs.writeFileSync(file, content)
  })
}

fixEntities()
