'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"styles.css": "0f2bcc2b3202368017cd9f8e7ae5c720",
"assets/fonts/Comfortaa-Regular.ttf": "31aefe19554b85e0e5c1232daebc158e",
"assets/fonts/Gilroy-Light.otf": "c62aded729bf7146d491275e5019d7fc",
"assets/fonts/Gilroy-ExtraBold.otf": "0f6e082f42f5247d82c3ade9c2a8f928",
"assets/fonts/Comfortaa-SemiBold.ttf": "2111f43a3fa184866e7033c66683056c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/mainImage.png": "79059bf3189dd71bab0f5e2a50fc98cd",
"assets/assets/dizain/6.jpg": "640e6cdc1b956f50bd5161b21b47387a",
"assets/assets/dizain/12.jpg": "1256c3047d889db754d37d9e51036d0b",
"assets/assets/dizain/10.jpg": "53769eb2dd352573916034301c3044f6",
"assets/assets/dizain/14.jpg": "952ebe8f7d81378fbaeafd6e3300f4f2",
"assets/assets/dizain/1.jpg": "8a5b5a491052dfd969a353336e20b161",
"assets/assets/dizain/7.jpg": "1540a0d64ce63190f8d876607af09a26",
"assets/assets/dizain/4.jpg": "27df14329929a9fe8bfd97effb6f1a9f",
"assets/assets/dizain/11.jpg": "7555c552b7137c2bee931f9e9aa6bb9f",
"assets/assets/dizain/3.jpg": "76f92011d69a7593fc521c5bdeb7dc72",
"assets/assets/dizain/5.png": "b55c5cb81c927c47ec2d6315ef6bb12a",
"assets/assets/dizain/8.jpg": "06b90b834b55ecf958aae6b202e41452",
"assets/assets/dizain/9.jpg": "70161cafd7042a2d9f617f7c7f66139c",
"assets/assets/dizain/16.jpg": "18c8098d2c81a503d8bbf9a6ba9973d7",
"assets/assets/dizain/15.jpg": "4bd63c19ce7f4a1029d1edbe02671c0b",
"assets/assets/dizain/13.jpg": "affe305cd274da8703c632ee57c9d559",
"assets/assets/dizain/2.jpg": "d11aa36c088741ed54cad66759a2a7e7",
"assets/assets/logo.png": "c089cd2b251952691cda4c73777708cd",
"assets/assets/stroika/3.webp": "fc1fa89a5359a36f258ccb1628b2bfb3",
"assets/assets/stroika/4.webp": "fb9c1306cfde6c6a6de4979696e35728",
"assets/assets/stroika/1.webp": "ffbb572b6ab5a967ee45bc69b29f2ae6",
"assets/assets/stroika/10.webp": "720e9560ed6bf1ec9ba0b87a30c18758",
"assets/assets/stroika/12.jpg": "1c95b81d3cc4d286d63ec16e74649db1",
"assets/assets/stroika/2.webp": "1aa8fcbff279d2b3bc06f540e0f0a627",
"assets/assets/stroika/7.webp": "d20ed8384b23ce15ff0f130b78612fa2",
"assets/assets/stroika/9.webp": "3ab8e705ab7e1c8c77347931fd077726",
"assets/assets/stroika/6.webp": "918b7ce61a0fcda398f8489d13c9553a",
"assets/assets/stroika/11.jpg": "d1cf4ae5d8aebc8181c4c3cd529c8e02",
"assets/assets/stroika/5.webp": "4ec7f078b231f30b76a96cba994b110b",
"assets/assets/stroika/8.webp": "fbde0a172bcdfb632c14aabef4fc95a9",
"assets/assets/social/vk.png": "288b45ade9f8d6c70ff439f27e5d9a1c",
"assets/assets/social/telegramm.png": "58336007ff36eeaff9feaa8abf2ed341",
"assets/assets/about/office_2.jpg": "e0f540f5a87b40d1409933c64d4efa1e",
"assets/assets/about/5.jpg": "05b01ff286dbca1a17ff72fb3ae439d5",
"assets/assets/about/office_3.jpg": "d57a328824f48081304f660492afe050",
"assets/assets/about/1.jpg": "7ea841c8a89a0693b38bae05d080212c",
"assets/assets/about/3.jpeg": "78099c5cefad2cc0cb2f9bef1869e564",
"assets/assets/about/office_1.jpg": "d38e40eccca3b0a0d63a039eab20c72b",
"assets/assets/about/4.jpg": "ae9665cd44f963248ede0e02e6d8fd1c",
"assets/assets/about/00.jpg": "a78801627fe88cb7bd191778b674e163",
"assets/assets/about/2.jpg": "8cbd388416a50e7ca4879defc99f4560",
"assets/assets/about/0.jpg": "bad98ad10335fb158e1748f4f1f7df75",
"assets/assets/interactive/1.jpg": "a119207c2479c9845ef2a966e9439bb0",
"assets/assets/interactive/4.jpg": "7e4c2293d37053c32da03cb2f6264f7a",
"assets/assets/interactive/3.jpg": "69514b917a0849f2bb74c536f75faa4a",
"assets/assets/interactive/2.jpg": "86a7b9aefe8579c04b2bb60fe81d0b9e",
"assets/assets/landshaft/6.jpg": "88bacab12a0917eebcb40e7806e3f441",
"assets/assets/landshaft/5.jpg": "ef28c0968501d6438b0480b248930c22",
"assets/assets/landshaft/1.jpg": "55fe5322cccc87708038d64e4446576a",
"assets/assets/landshaft/7.jpg": "749b1cf21b640448071257480bca1121",
"assets/assets/landshaft/4.jpg": "76511209e19c3c4430d74dad3a7fc389",
"assets/assets/landshaft/3.jpg": "99e1d469a11ce15b7554bf05ba4cfa61",
"assets/assets/landshaft/8.jpg": "90c87dd940bca185d3975922c3bc4caa",
"assets/assets/landshaft/2.jpg": "e3856b3e257c6e22b4359f984929798c",
"assets/assets/map/flag.png": "98f9e58a437418ef1de2f94fcfe41c93",
"assets/assets/map/map_marker.png": "d4a18d55a7139b80a3a1bbc84f2f4d1b",
"assets/assets/services/6.jpg": "d1e1c6930b33ac2b54e186f7f5d064bf",
"assets/assets/services/5.jpg": "451b122f3005b1c701711976d99c20a9",
"assets/assets/services/1.jpg": "8884e752a02fe3a72a400b6eb41fcb35",
"assets/assets/services/4.jpg": "2b8bc031e681eec71acf0d74e7130b5e",
"assets/assets/services/3.jpg": "e8d12a8c39d8cf8ca89955505449bb03",
"assets/assets/services/2.jpg": "a96f7f0f4e92854c69a8c9aa3914b17c",
"assets/assets/otdelka/6.jpg": "64894514c7fcb9d46485890d4b1130ce",
"assets/assets/otdelka/18.jpg": "74176128adae1cee7561adda9ee4bd67",
"assets/assets/otdelka/12.jpg": "0140870b6e78e9d332b11aa172c4ca1b",
"assets/assets/otdelka/10.jpg": "bb1d165a66c6a7f8f7e3d376d63fbef0",
"assets/assets/otdelka/14.jpg": "ecd14921a5c73c0e577ff0386529410a",
"assets/assets/otdelka/5.jpg": "c57852c45edb794cbc630c734cfa8453",
"assets/assets/otdelka/19.jpg": "037c964c4aea744a1a1922c35f1bec63",
"assets/assets/otdelka/1.jpg": "870638a929dbc1e82a9a0af507dac593",
"assets/assets/otdelka/7.jpg": "c1d63f26dae8c6dc71b4e19e86639a1c",
"assets/assets/otdelka/4.jpg": "42735350ec678936e7ba36418731f7df",
"assets/assets/otdelka/11.jpg": "fde6adc2a8cdda24b6a1435294aabbcf",
"assets/assets/otdelka/20.jpg": "9d1c9cc192b26f23a5784354af45ba57",
"assets/assets/otdelka/3.jpg": "0f7dc4df0ff3927e77c0998fdefaf724",
"assets/assets/otdelka/8.jpg": "45b9ebeb2b01c51c3df5c93b0bf12b54",
"assets/assets/otdelka/17.jpg": "2eb89d5b99deb0f7b5725bd83a6487aa",
"assets/assets/otdelka/9.jpg": "0bdbb066f8106d9410c3b2e328f17fba",
"assets/assets/otdelka/16.jpg": "aa50aebe2649bca6d516f30f633bc18d",
"assets/assets/otdelka/15.jpg": "9dd1138bca59da14b2926b7bf5ff7544",
"assets/assets/otdelka/13.jpg": "bf2a3a5fb304345f3faf78aba4df17a6",
"assets/assets/otdelka/2.jpg": "4553e4a669125b6bb6419c2de9292af4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "e1171a05dfbe3fdeda0d2218e17c329e",
"assets/NOTICES": "667b0ca9520a9e64eef7238068e79447",
"assets/FontManifest.json": "d8d825287eb08b86e27d2f55074ee1db",
"assets/map/flag.png": "98f9e58a437418ef1de2f94fcfe41c93",
"assets/map/map_marker.png": "d4a18d55a7139b80a3a1bbc84f2f4d1b",
"main.dart.js": "fade2cc1274c3e26d41d2b7691cdedfe",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"version.json": "bcb4824fd01ab9124cb531d883d02b91",
"manifest.json": "0cec3927646c70270fa87de5fb84c1dc",
"icons/android-icon-36x36.png": "83db689ceeeb865919cad5325eb32350",
"icons/apple-icon-120x120.png": "89a6fa82ca859361de53765982c8c3f5",
"icons/android-icon-144x144.png": "0887d74bf3e130e612f538a8e9f477c9",
"icons/android-icon-72x72.png": "0dee45fed36a50dc58c2a324f874895c",
"icons/apple-icon-152x152.png": "064b1aedf976a303fc4d1451bd9ecabe",
"icons/ms-icon-144x144.png": "0887d74bf3e130e612f538a8e9f477c9",
"icons/ms-icon-310x310.png": "2e2f9544c59b235b68285c87c198a7c4",
"icons/apple-icon.png": "654cf914c7b98754426ffb8f024e8aaf",
"icons/favicon-96x96.png": "ba878a5f1cefa6e47a3827d256858a24",
"icons/apple-icon-114x114.png": "122551e86d6a66e9299227b8bbc27ac3",
"icons/ms-icon-70x70.png": "3b2b8fe91425542e654b277efd986691",
"icons/apple-icon-180x180.png": "ccc678168aac4d63249cd10bf41febfe",
"icons/ms-icon-150x150.png": "4d9c08bb65cb12ae0ac7d0908bfaddb6",
"icons/apple-icon-60x60.png": "adbd3bd7c3903f1a844762ac01bc8c35",
"icons/apple-icon-57x57.png": "f3e6bf90932124b2b7d8326ee53da08d",
"icons/apple-icon-precomposed.png": "654cf914c7b98754426ffb8f024e8aaf",
"icons/apple-icon-76x76.png": "aed5755bc9fcbb1039fae8707ed86a38",
"icons/android-icon-48x48.png": "8be10658c05fd41540038763a3ba972d",
"icons/android-icon-96x96.png": "ba878a5f1cefa6e47a3827d256858a24",
"icons/favicon-16x16.png": "06a568817243f4cb82590d7067f5d683",
"icons/android-icon-192x192.png": "193611459193bef4f3072b5120d1c437",
"icons/favicon-32x32.png": "cc471e9a20af92015deef5bd2b24de16",
"icons/apple-icon-72x72.png": "0dee45fed36a50dc58c2a324f874895c",
"icons/apple-icon-144x144.png": "0887d74bf3e130e612f538a8e9f477c9",
"index.html": "5c850a974cd0a0e55734c6f0b81ac684",
"/": "5c850a974cd0a0e55734c6f0b81ac684",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
