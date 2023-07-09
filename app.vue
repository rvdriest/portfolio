<script lang="ts" setup>
useHead({
  title: 'Portfolio - Richard van Driest (Software Engineer)',
  htmlAttrs: {
    lang: 'nl',
  },
  meta: [
    {
      name: 'description',
      content: 'Software op maat: innovatieve oplossingen voor jouw digitale uitdagingen.'
    },
  ]
})
</script>

<template>
  <main class="min-h-screen dark:bg-gray-900 text-white">
    <section class="flex flex-col justify-center h-screen w-full">
  		<div class="container mx-auto">
  			<h1 class=" max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hallo, mijn naam is <span class="text-blue-600 dark:text-blue-500">Richard van Driest</span>.</h1>
  			<p class=" max-w-3xl text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Software op maat: innovatieve oplossingen voor jouw digitale uitdagingen.</p>
  			<div class="flex items-center gap-8 mt-12">
  				<!-- Socials -->
  				<NuxtLink to="https://www.linkedin.com/in/richard-van-driest-38850918a/" target="_blank">
  					<svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
  						<path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
  						<path d="M3 5.012H0V15h3V5.012Z"/>
  					</svg>
  					<span class="sr-only">LinkedIn</span>
  				</NuxtLink>
  				<NuxtLink to="https://github.com/rvdriest" target="_blank">
  					<svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  						<path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
  					</svg>
  					<span class="sr-only">Github</span>
  				</NuxtLink>
  				<a href="mailto:richard.vandriest@outlook.com">
  					<svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  						<path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
  					</svg>
  					<span class="sr-only">Mail</span>
  				</a>
  			</div>
  		</div> 
  		<p class="absolute bottom-6 w-full text-center text-gray-500">
  			© {{ new Date().getFullYear() }} RVDriest Solutions. Alle rechten voorbehouden.
  		</p>
  	</section>
  </main>
</template>
