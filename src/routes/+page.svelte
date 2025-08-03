<script lang="ts">
	import { InfoCategories } from '$lib';
	import Icon from '@iconify/svelte';

	import { onMount } from 'svelte';

	let topics: string[] = $state(['']);
	let topicMenu: string = $state('');

	const openTopic = (topic: string) => {
		if (topicMenu === topic) {
			topicMenu = '';
		} else {
			topicMenu = topic;
		}
	};

	onMount(async () => {
		topics = await InfoCategories.getCategories();
	});
</script>

<div class="bg-[#f8f9fa] min-h-screen h-fit">
<main class="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-6 py-24">
	<h1 class="border-b text-xl font-bold sm:text-6xl">Study Software Topics</h1>
	<section class="flex flex-col gap-4">
		{#if topics}
			{#each topics as topic}
				<div class="shadow-md py-2 px-4 space-y-4 duration-200 rounded-md bg-white">
					<button
						class="w-full flex cursor-pointer items-center justify-between hover:pr-2 duration-200"
						onclick={() => openTopic(topic)}
					>
						<span class="text-xl">{topic} </span>
						<Icon
							icon="ep:arrow-left"
							class={`duration-200 ${topic === topicMenu ? '-rotate-90' : ''}`}
						/>
					</button>
					{#if topicMenu === topic}
						<div class="flex flex-col gap-2">
							<a href={`/${topic}/flashcards`} class="underline text-blue-500">Flash Cards</a>
                            <a href={`/${topic}/summaries`} class="underline text-blue-500">Summaries and Resources</a>
						</div>
					{/if}
				</div>
			{/each}
		{/if}
	</section>
</main>
</div>