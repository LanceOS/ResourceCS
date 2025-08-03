<script lang="ts">
	import { onMount } from 'svelte';
	import { slide, fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { InfoCategories } from '$lib';

	let topics: string[] = $state([]);
	let isMenuOpen: boolean = $state(false);
	let activeTopic: string = $state('');

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		if (!isMenuOpen) {
			activeTopic = '';
		}
	};

	const toggleTopic = (topic: string) => {
		if (activeTopic === topic) {
			activeTopic = '';
		} else {
			activeTopic = topic;
		}
	};

	onMount(async () => {
		topics = await InfoCategories.getCategories();
	});
</script>

<button
	class="fixed top-6 left-6 z-30 w-32 cursor-pointer rounded-md border p-2 text-center font-semibold transition-all duration-200 hover:w-36 bg-white"
	onclick={toggleMenu}
>
	{isMenuOpen ? 'Close' : 'Topics'}
</button>

{#if isMenuOpen}
	<aside
		class="fixed top-0 left-0 z-20 flex h-screen w-64 flex-col gap-1 border-r p-4 pt-24 bg-white"
		transition:slide={{ duration: 300, axis: 'x' }}
	>
		<div in:fade={{ delay: 250, duration: 300 }} class="flex flex-col overflow-y-auto">
			<a
				href="/"
				class="rounded-md p-2 py-1 text-left text-lg font-light transition-colors duration-200 hover:bg-gray-100 mb-1"
			>
				Home
			</a>
			<div class="w-full border-b border-gray-200"></div>
			{#each topics as topic}
				<div class="w-full border-b border-gray-200 py-1">
					<button
						class="flex w-full cursor-pointer items-center justify-between rounded-md p-2 text-left text-lg font-light transition-colors duration-200 hover:bg-gray-100"
						onclick={() => toggleTopic(topic)}
					>
						<span>{topic}</span>
						<Icon
							icon="ep:arrow-left"
							class={`transform transition-transform duration-300 ${activeTopic === topic ? '-rotate-90' : ''}`}
						/>
					</button>

					{#if activeTopic === topic}
						<div class="flex flex-col gap-2 py-2 pl-4">
							<a href={`/${topic}/flashcards`} class="text-blue-600 underline hover:text-blue-800" onclick={() => {toggleMenu(), window.location.reload()}}
								>Flash Cards</a
							>
							<a href={`/${topic}/summaries`} class="text-blue-600 underline hover:text-blue-800" onclick={() => {toggleMenu(), window.location.reload()}}
								>Summaries</a
							>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</aside>
{/if}
