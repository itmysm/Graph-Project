<template>
  <section class="flex justify-center items-center w-full h-full min-h-fit bg-primary absolute top-0 left-0 z-[999]">
    <div class="min-w-[320px] flex flex-col items-center w-fit min-h-fit h-fit bg-accent rounded-md px-5 py-4">
      {{props}}
      <p>Select a chat from this list</p>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <tbody>
            <tr v-for="(item, index) in props.items" :key="index">
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img :src="useMediaBaseApi().value + item.avatar" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{item.name}}</div>
                    <div class="text-sm opacity-50">Private</div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['items'])

</script>
