<script lang="ts">
  import { writable } from "svelte/store";
  import type { ItemsEntity } from "../types";

  export let items: ItemsEntity[];
  let indexes = writable({
    0: 0,
    1: 1,
    2: 2,
  });
</script>

<ul class="flex flex-col xl:flex-row my-4">
  <a href={"https://odysee.com/@davidsbok:d/"+items[$indexes[2]].permanent_url.split("lbry://")[1]}>
    <img
      class="mx-2"
      height="220"
      width="390"
      src={"https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/" +
        items[$indexes[0]].value.thumbnail.url}
      alt=""
    />
    <p class="text-xl w-[390px] mb-2">
      {items[$indexes[0]].value.title}
    </p>
  </a>
  <a href={"https://odysee.com/@davidsbok:d/"+items[$indexes[2]].permanent_url.split("lbry://")[1]}>
    <img
      class="mx-2"
      height="220"
      width="390"
      src={"https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/" +
        items[$indexes[1]].value.thumbnail.url}
      alt=""
    />
    <p class="text-xl w-[390px] mb-2">
      {items[$indexes[1]].value.title}
    </p>
  </a>
  <a href={"https://odysee.com/@davidsbok:d/"+items[$indexes[2]].permanent_url.split("lbry://")[1]}>
    <img
      class="mx-2"
      height="220"
      width="390"
      src={"https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/" +
        items[$indexes[2]].value.thumbnail.url}
      alt=""
    />
    <p class="text-xl w-[390px] mb-2">
      {items[$indexes[2]].value.title}
    </p>
  </a>
</ul>
<div class="text-white text-lg mt-12">
  <button
    class="p-2 bg-primary hover:bg-accent"
    on:click={() => {
      if ($indexes[0] === items.length - 1) {
        $indexes[0] = 0;
      } else {
        $indexes[0] += 1;
      }
      if ($indexes[1] === items.length - 1) {
        $indexes[1] = 0;
      } else {
        $indexes[1] += 1;
      }
      if ($indexes[2] === items.length - 1) {
        $indexes[2] = 0;
      } else {
        $indexes[2] += 1;
      }
    }}
  >
    Se nästa
  </button>
  <button
    on:click={() => {
      window.location.href = "https://odysee.com/@davidsbok:d";
    }}
    class="p-2 bg-secondary text-black hover:text-white hover:bg-accent"
  >
    Alla videos
  </button>
</div>
