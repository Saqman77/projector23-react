import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    // depending on your application, base can also be "/"
    root: 'src/',
    publicDir: '../public/',
    // base: '/',
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
})