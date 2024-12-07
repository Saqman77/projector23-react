import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';  // To handle the path module
// import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    // depending on your application, base can also be "/"
    root: 'src',
    publicDir: '../public',
    base: './',
    plugins: [react()],
    esbuild: {
        loader: 'jsx', // Ensure JSX is enabled for .js files
    },
    server: {    
        // this ensures that the browser opens upon server start
        // open: true,
        // this sets a default port to 3000  
        host:true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true // Add sourcemap
    },
    resolve: {
        alias: {
          // Set up alias for easier imports
          '@components': path.resolve(__dirname, 'src/components'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@images': path.resolve(__dirname, 'src/assets/images'),
          '@vid': path.resolve(__dirname, 'src/assets/vid'),
        },
    },
})