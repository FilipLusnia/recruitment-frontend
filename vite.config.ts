import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from 'vite-plugin-svgr'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'

const vitestConfig: VitestUserConfigInterface = {
	test: {
		globals: true,
		environment: "jsdom"
	}
};

export default defineConfig({
	plugins: [react(), svgLoader()],
	test: vitestConfig.test,
	server: {
		port: 3000
	},
	base: "/recruitment-frontend/"
})