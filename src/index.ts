import type { Plugin } from 'vite'
const fs = require('fs')

export default function officeManifest() : Plugin {
  const manifestFile = 'manifest.xml'

  return {
    name: 'office-addin:manifest',

    generateBundle() {
      const content = fs.readFileSync(manifestFile, 'utf-8')

      this.emitFile({
        type: 'asset',
        fileName: manifestFile,
        source: content
      })
    },
  }
}
