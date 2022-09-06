<template>
  <div class="">
    <h3 class="text-2xl text-secondary">{{$t('recentFiles')}}</h3>
    <div class="flex">
      <ul class="flex mt-6">
        <li class="w-52 mb-4 group cursor-pointer rtl:ml-5 ltr:mr-5" @click="openFile(i)" v-for="data in examples"
          :key="data">
          <div class="overflow-hidden rounded-md relative">
            <img class="group-hover:blur-[2px] transition-all duration-500"
              src="~/assets/media/banners/socials/s-bf3594e61940024a1b16bffcada0c4a0.png" alt="">
            <NuxtLink class="absolute top-[40%] left-[29%] rounded-full"></NuxtLink>
          </div>
          <p class="text-secondary mt-2 group-hover:text-primary transition-all duration-500">
            {{data.title}}.{{data._extension}}</p>
          <p class="text-xs text-neutral group-hover:text-primary transition-all duration-500">{{fromNow('September 1, 2022 23:54:00')}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data: examples } = await useAsyncData('examples', () => queryContent('/examples').find())

const date = new Date()
const dateNow = date.getTime()

// this function work like fromNow() method in moment.js library
const MS_SECOND = 1000
const MS_MINUTE = (MS_SECOND * 60)
const MS_HOUR = (MS_MINUTE * 60)
const MS_DAY = (MS_HOUR * 24)
const MS_MONTH = (MS_DAY * 30)
const MS_YEAR = (MS_DAY * 365)

const FROM_NOW_JUST_NOW = (MS_SECOND * 44)
const FROM_NOW_MINUTE = (MS_SECOND * 89)
const FROM_NOW_MINUTES = (MS_MINUTE * 44)
const FROM_NOW_HOUR = (MS_MINUTE * 89)
const FROM_NOW_HOURS = (MS_HOUR * 21)
const FROM_NOW_DAY = (MS_HOUR * 35)
const FROM_NOW_DAYS = (MS_DAY * 25)
const FROM_NOW_MONTH = (MS_DAY * 45)
const FROM_NOW_MONTHS = (MS_DAY * 319)
const FROM_NOW_YEAR = (MS_DAY * 547)

function fromNow (dateInput) {
  const timeStampDateInput = new Date(dateInput).getTime()
  const delta = dateNow - timeStampDateInput
  if (timeStampDateInput > dateNow) {
    return ('this is in the future')
  } else if (delta <= FROM_NOW_JUST_NOW) {
    return ('a few seconds ago')
  } else if (delta <= FROM_NOW_MINUTE) {
    return ('a minute ago')
  } else if (delta <= FROM_NOW_MINUTES) {
    return (Math.ceil(delta / MS_MINUTE) + ' minutes ago')
  } else if (delta <= FROM_NOW_HOUR) {
    return ('an hour ago')
  } else if (delta <= FROM_NOW_HOURS) {
    return (Math.ceil(delta / MS_HOUR) + ' hours ago')
  } else if (delta <= FROM_NOW_DAY) {
    return ('a day ago')
  } else if (delta <= FROM_NOW_DAYS) {
    return (Math.ceil(delta / MS_DAY) + ' days ago')
  } else if (delta <= FROM_NOW_MONTH) {
    return ('a month ago')
  } else if (delta <= FROM_NOW_MONTHS) {
    return (Math.ceil(delta / MS_MONTH) + ' months ago')
  } else if (delta <= FROM_NOW_YEAR) {
    return ('a year ago')
  } else {
    return (Math.ceil(delta / MS_YEAR) + ' years ago')
  }
}

console.log(fromNow('September 6, 2022 12:50:00'))
</script>
