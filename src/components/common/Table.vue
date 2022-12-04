
<template v-if="showTemplate">
  <div class="w-fit flex flex-col items-center">
    <section class="border border-primary rounded-md">
      <div class="overflow-x-auto">
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th>
                </th>
                <th>Name</th>
                <th>Type</th>
                <th>Messages</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr v-for="(item, index) in tables[currentPage]" :key="index">
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src="https://cdn.dribbble.com/users/4505805/avatars/small/958e0fd99ec34c5a0f3dbea014c2c85b.png?1613393401" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold w-[170px] max-w-[170px] overflow-hidden">
                        {{item.name == null ? 'Deleted account' : item.name}}
                      </div>
                      <div class="text-sm opacity-50">Null</div>
                    </div>
                  </div>
                </td>
                <td>
                  {{item.type}}
                </td>
                <td class="text-center">{{ item.messages.length }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    
    <div class="btn-group mt-6">
      <button @click="currentPage = index" class="btn" :class="index === currentPage ? 'btn-active' : ''" v-for="(item, index) in tables.length" :key="index">
        {{ index + 1}}
      </button>
    </div>
  </div>
</template>

<script setup>
import { textShortener } from '~/scripts/textShortener'

const props = defineProps(['list'])
const showTemplate = ref(false)
const currentPage = ref(0)
const maxTableShow = 8
const tables = ref([])

function stringShorter (string, length) {
  return string.length > length ? string.substr(0, length) + '..' : string
}

onMounted(() => {
  setTimeout(() => {
    while (props.list.length > 0) {
      tables.value.push(props.list.splice(0, maxTableShow))
    }
    showTemplate.value = true
  }, 1000)
})

</script>

<style>
</style>