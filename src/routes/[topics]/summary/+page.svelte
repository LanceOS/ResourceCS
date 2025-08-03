<script lang="ts">
	import { page } from "$app/state";
	import { InfoCategories } from "$lib";
	import { onMount } from "svelte";

	const topic = page.params.topics;

	let summaries: any = $state()

	onMount(async () => {
		if (topic) {
			summaries = await InfoCategories.getSummariesByCategory(topic);
		}
	});
</script>


<div class="h-fit min-h-screen bg-[#f8f9fa]">
	<main class="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-4 px-6 py-24">

	</main>
</div>