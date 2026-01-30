import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default definedConfig ({
    Plugins: [react()],
    server: {
        host:'0.0.0.0',
        port: 5000,
        allowedHost: true
    }
})