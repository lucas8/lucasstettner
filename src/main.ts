import './styles/app.css'
import './styles/reset.css'
import App from './App.svelte'

if (process.env.NODE_ENV === 'production') {
  const { inject } = await import('@vercel/analytics')

  inject()
}

const app = new App({
  target: document.getElementById('app'),
  intro: true,
})

export default app
