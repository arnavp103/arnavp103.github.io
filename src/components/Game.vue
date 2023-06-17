<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
	if (canvas.value) {
		const ctx = canvas.value.getContext('2d');
		if (ctx) {
			ctx.fillStyle = 'red';
			ctx.fillRect(0, 0, 100, 100);
		}
	}
});
</script>

<template>
	<canvas id="game">

	</canvas>

</template>

<style scoped>
</style>