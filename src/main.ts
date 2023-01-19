import './styles/app.css'
import './styles/reset.css'
import App from './App.svelte'
import { inject } from '@vercel/analytics'

inject()

const app = new App({
  target: document.getElementById('app'),
  intro: true,
})

export default app
