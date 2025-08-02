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

<main class="mx-auto flex h-screen max-w-6xl flex-col gap-6 py-16">
	<h1 class="border-b text-xl font-bold sm:text-6xl">Study Software Topics</h1>
	<section class="flex flex-col gap-4 overflow-y-scroll">
		{#if topics}
			{#each topics as topic}
				<div class="border py-2 px-4 space-y-6 duration-200">
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
						<div>
							<p>Test</p>
						</div>
					{/if}
				</div>
			{/each}
		{/if}
	</section>
</main>
