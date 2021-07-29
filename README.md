# vite-plugin-office-addin

> Office Add-ins development using Vite.

Build your Office Add-in using Vite. This plugin adds the support
for **manifest.xml** file to be copied to build output.

## Getting Started

Install the **vite-plugin-office-addin** to your Office Add-in project.

```sh
# using npm
npm install --save-dev vite-plugin-office-addin

# using yarn
yarn add vite-plugin-office-addin -D
```

### Configure Vite

Use the plugin in your `vite.config.js` file:

```js
// vite.config.js
import officeAddin from 'vite-plugin-office-addin'

export default defineConfig({
  plugins: [officeAddin()]
})
```

## License

Licensed under [MIT License](LICENSE).  
Copyright © 2021 Jozef Izso
