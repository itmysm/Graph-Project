<template>
  <section id="section" class="min-w-full min-h-screen bg-[#12181e] flex flex-col justify-center items-center">

  </section>
</template>

<script setup>
definePageMeta({
  layout: 'start'
})

const errors = ['_privateTab', '_underMaintenance']
const matchedItem = []
let section

onMounted(() => {
  section = document.querySelector('#section')
  for (let index = 0; index < errors.length; index++) {
    document.location.href.includes(errors[index]) ? matchedItem.push(errors[index]) : index++
  }

  switch (matchedItem[0]) {
    case '_privateTab':
      privateTabError()
      break
    case '_underMaintenance':
      privateTabError()
      break
    default:
      page404()
      break
  }
})

function page404 () {
  section.innerHTML = `
  <div class="w-40 logos flex justify-around">
    <svg class="h-20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Playwright</title><path fill="#F87272" d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 0 1-.171.049Zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z"/></svg>
   </div>

   <h1 class="text-error text-4xl mt-10">404</h1>
   <b class="md:w-4/5 lg:w-3/5 text-white text-center lg:text-lg mt-2 px-10">
    Sorry, we couldn't find this page.
   </b>
  </div>
  `
}

function privateTabError () {
  section.innerHTML = `
   <div class="w-40 logos flex justify-around">
    <svg class="h-12" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Firefox</title><path fill="#00FFC2" d="M20.452 3.445a11.002 11.002 0 00-2.482-1.908C16.944.997 15.098.093 12.477.032c-.734-.017-1.457.03-2.174.144-.72.114-1.398.292-2.118.56-1.017.377-1.996.975-2.574 1.554.583-.349 1.476-.733 2.55-.992a10.083 10.083 0 013.729-.167c2.341.34 4.178 1.381 5.48 2.625a8.066 8.066 0 011.298 1.587c1.468 2.382 1.33 5.376.184 7.142-.85 1.312-2.67 2.544-4.37 2.53-.583-.023-1.438-.152-2.25-.566-2.629-1.343-3.021-4.688-1.118-6.306-.632-.136-1.82.13-2.646 1.363-.742 1.107-.7 2.816-.242 4.028a6.473 6.473 0 01-.59-1.895 7.695 7.695 0 01.416-3.845A8.212 8.212 0 019.45 5.399c.896-1.069 1.908-1.72 2.75-2.005-.54-.471-1.411-.738-2.421-.767C8.31 2.583 6.327 3.061 4.7 4.41a8.148 8.148 0 00-1.976 2.414c-.455.836-.691 1.659-.697 1.678.122-1.445.704-2.994 1.248-4.055-.79.413-1.827 1.668-2.41 3.042C.095 9.37-.2 11.608.14 13.989c.966 5.668 5.9 9.982 11.843 9.982C18.62 23.971 24 18.591 24 11.956a11.93 11.93 0 00-3.548-8.511z"/></svg>
   </div>
   <h1 class="md:w-4/5 lg:w-4/5 xl:w-3/6 text-white text-center lg:text-md mt-5 px-10">
      We are using <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" target="_blank" class="text-info underline hover:text-primary">IndexDB</a> feature in our app and private tabs in Firefox does <b class="text-error">not support</b> this feature so this will cause the program to malfunction. Please try with a normal tab
    </h1>
  </div>
  `
}

</script>

<style lang="scss" scoped>

</style>
