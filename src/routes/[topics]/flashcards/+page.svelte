<script lang="ts">
	import { page } from '$app/state';
	import { InfoCategories } from '$lib';
	import { onMount } from 'svelte';

	const topic = page.params.topics;

	let flashcards: any = $state();
	let selectedCard: any = $state();

	let isAnswerShown: boolean = $state(false);

	const showAnswer = () => {
		isAnswerShown = true;
	};

	const shuffleCards = () => {
		isAnswerShown = false;
		const randomCard = Math.floor(Math.random() * flashcards.data.length);
		selectedCard = flashcards.data[randomCard];
		console.log(selectedCard);
	};

	onMount(async () => {
		if (topic) {
			flashcards = await InfoCategories.getFlashCardsByCategory(topic);
		}
	});
</script>

<div class="h-fit min-h-screen bg-[#f8f9fa]">
	<main class="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-4 px-6 py-24">
		<div class="w-full space-y-4 border p-8 duration-200 rounded-md">
			{#if selectedCard}
				<h1 class="text-xl font-semibold sm:text-3xl">{selectedCard.question}</h1>
				{#if isAnswerShown}
					<p>{selectedCard.answer}</p>

					<div class="flex flex-col gap-2">
                        <h2 class="font-bold text-md">Sources:</h2>
						{#each selectedCard.sources as source}
							<a href={source.source} class="text-blue-500 underline">{source.name}</a>
						{/each}
					</div>
				{/if}
			{:else}
				<h1 class="text-xl font-semibold sm:text-3xl">Shuffle Cards</h1>
			{/if}
		</div>
		<div class="flex justify-between">
			<button
				type="button"
				class="w-30 cursor-pointer rounded-md border py-2 duration-200 hover:w-32"
				onclick={showAnswer}
			>
				View Answer
			</button>
			<button
				type="button"
				class="w-30 cursor-pointer rounded-md border py-2 duration-200 hover:w-32"
				onclick={shuffleCards}
			>
				Shuffle
			</button>
		</div>
	</main>
</div>
