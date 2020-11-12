import '../assets/bootstrap';
import feather from 'feather-icons';
import HMR from '@roxi/routify/hmr';
import App from './App.svelte';

window.feather = feather;

const app = HMR(App, { target: document.body }, 'routify-app');

export default app;

/** Service worker. Uncomment to use service worker */

// if ('serviceWorker' in navigator) {
//     addEventListener('app-loaded', () => {
//         window.requestIdleCallback(() =>
//             import('workbox-window').then(async ({ Workbox }) => {
//                 const wb = new Workbox('/serviceworker.js')
//                 const registration = await wb.register()
//                 wb.addEventListener('installed', () => (console.log('installed service worker')))
//                 wb.addEventListener('externalinstalled', () => (console.log('installed service worker')))
//             })
//         )
//     })
// }
