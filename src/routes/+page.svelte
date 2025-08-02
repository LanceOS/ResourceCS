<script lang="ts">
	import { InfoCategories } from '$lib';
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';

	let topics: string[] = $state(['']);

	onMount(async () => {
		topics = await InfoCategories.getCategories();
	});
</script>

<main class="flex flex-col gap-6 h-screen max-w-6xl mx-auto py-16">
	<h1 class="text-xl font-bold sm:text-6xl border-b">Study Software Topics</h1>
	<div class="flex flex-col gap-4 overflow-y-scroll">
		{#if topics}
			{#each topics as topic}
                <a href={`/${topic}/flashcards`} class="text-xl h-screen py-2 px-4 border shadow-sm duration-200">{topic}</a>
            {/each}
		{/if}
	</div>
</main>
