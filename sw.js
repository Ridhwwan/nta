const CACHE_NAME = 'static_cache'
const STATIC_ASSETS = [
    '/login.html',
    'pages/4-digit-pin.html',
    'pages/book-ticket.html',
    'pages/card-details.html',
    'pages/loading page.html',
    'pages/options-details-to-payment.html',
    'pages/order-review.html',
    'pages/otp.html',
    'pages/pick-date.html',
    'pages/profile.html',
    'pages/resetpassword.html',
    'pages/sign-up.html',
    'pages/tickethistory.html',
    'pages/ticketshow.html',
    'pages/transaction-failure.html',
    'pages/transaction-success.html',
    'icons/arrow-square-left.svg',
    'icons/book_Ticket.svg',
    'icons/full.svg',
    'icons/History.svg',
    'icons/loading animation 300.gif',
    'icons/logo-text.svg',
    'icons/profile.svg',
    'icons/ticket downloaded.svg',
    '/css/style.css',
    '/css/navstyles.css',
    '/js/script.js',
    '/icon-192.png',
    '/icon-512.png',
    '/index.html',
    '/login-with-back.html',
    'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'
    
]


self.addEventListener('install', event => {
    event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>{
        console.log("Caching Assets")
        cache.addAll(STATIC_ASSETS)
        console.log('Assets cached')
    }))    
})
// async function preCache(){
//     const cache = await caches.open(CACHE_NAME)
//     return cache.addAll(STATIC_ASSETS)
// }

// self.addEventListener('install', event =>{
//     console.log('[SW] installed');
//     self.skipWaiting()
//     event.waitUntil(preCache())

// })

// async function cleanCache(){
//     const keys = await caches.keys()
//     const keysToDelete = keys.map(key => {
//         if (key !== CACHE_NAME){
//             return caches.delete(key)
//         }
//     })

//     return Promise.all(keysToDelete)
// }

// self.addEventListener('activate', event => {
//     console.log("[SW] activated");
//     event.waitUntil(cleanCache())
// })

async function fetchAssets(event) {
    try{
        const response = await fetch(event.request)
        return response
    } catch (err){
        const cache = await caches.open(CACHE_NAME)
        return cache.match(event.request)
    }
}

self.addEventListener('fetch', event => {
    console.log("[SW] fetched")
    event.respondWith(fetchAssets(event))
})