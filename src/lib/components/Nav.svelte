<script lang="ts">
	import { InfoCategories } from '$lib';
	import { onMount } from 'svelte';
	import { slide, fade } from 'svelte/transition';

	let topics: string[] = $state([]);
	let isMenuOpen: boolean = $state(false);

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	onMount(async () => {
		topics = await InfoCategories.getCategories();
	});
</script>

<button
	class="fixed top-6 left-6 z-30 w-32 cursor-pointer rounded-md border p-2 text-center font-semibold transition-all duration-300 hover:w-36"
	onclick={toggleMenu}
>
	{isMenuOpen ? 'Close' : 'Topics'}
</button>

{#if isMenuOpen}
	<aside
		class="fixed top-0 left-0 z-20 flex h-screen w-64 flex-col gap-2 overflow-y-scroll p-6 pt-24 shadow-xl"
		transition:slide={{ duration: 300, axis: 'x' }}
	>
		<div in:fade={{ delay: 250, duration: 300 }} class="flex flex-col gap-2">
			<a
				href={`/`}
				onclick={toggleMenu}
				class="block rounded-md p-3 text-lg font-light text-black transition-all duration-200 hover:translate-x-2 hover:bg-gray-100"
			>
				Home
			</a>
			{#each topics as topic}
				<a
					href={`/${topic}/flashcards`}
					onclick={toggleMenu}
					class="block rounded-md p-3 text-lg font-light text-black transition-all duration-200 hover:translate-x-2 hover:bg-gray-100"
				>
					{topic}
				</a>
			{/each}
		</div>
	</aside>
{/if}
