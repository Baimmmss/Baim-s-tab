import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'vite-plugin-javascript-obfuscator'

// https://vite.dev/config/
function mangleClassNamesPlugin() {
  let cssMap = new Map();
  return {
    name: 'mangle-classnames',
    enforce: 'post',
    generateBundle(options, bundle) {
      let cssChunk;
      for (const key in bundle) {
        if (key.endsWith('.css')) cssChunk = bundle[key];
      }
      if (!cssChunk) return;

      let cssSource = cssChunk.source;
      const classRegex = /\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g;
      let match;
      while ((match = classRegex.exec(cssSource)) !== null) {
        const className = match[1];
        // skip common framework/html elements or fontawesome classes like fa-solid
        if (className.startsWith('fa-') || className === 'root' || className === 'active') {
          continue;
        }
        if (!cssMap.has(className)) {
          cssMap.set(className, 'x' + Math.random().toString(36).substring(2, 8));
        }
      }

      for (const [oldClass, newClass] of cssMap.entries()) {
        const regex = new RegExp(`\\.${oldClass}(?![a-zA-Z0-9_-])`, 'g');
        cssSource = cssSource.replace(regex, `.${newClass}`);
      }
      cssChunk.source = cssSource;

      for (const key in bundle) {
        if (key.endsWith('.js')) {
          let jsSource = bundle[key].code;
          for (const [oldClass, newClass] of cssMap.entries()) {
             const regex = new RegExp(`\\b${oldClass}\\b`, 'g');
             jsSource = jsSource.replace(regex, newClass);
          }
          bundle[key].code = jsSource;
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    mangleClassNamesPlugin(),
    obfuscator({
      exclude: [/node_modules/],
      apply: 'build', // only obfuscate during build
      debugger: false,
      options: {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        numbersToExpressions: true,
        renameGlobals: false,
        selfDefending: false,
        simplify: true,
        splitStrings: true,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false
      }
    })
  ],
})
