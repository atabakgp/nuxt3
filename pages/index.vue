<template>
  <div class="homepage">
    <div>
      <span v-if="loading">
        loading...
      </span>
      <span v-else>
        {{ response }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import "./index.scss";
  import { startSteps } from "@/services/index";
  import { useStore } from "~/store/index";

  const store = useStore();
  const loading = ref(store.showLoading);
  const response = await startSteps();
</script>

