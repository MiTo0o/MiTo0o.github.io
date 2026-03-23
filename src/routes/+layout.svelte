<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Derzan Chiang</title>
	<meta
		name="description"
		content="Personal portfolio of Derzan Chiang, a full-stack developer."
	/>
</svelte:head>

<div class="fixed inset-0 bg-grain z-50 pointer-events-none"></div>
<div class="fixed inset-0 bg-grid z-0 pointer-events-none"></div>

<!-- Ambient Background Glows -->
<div
	class="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none z-0"
></div>
<div
	class="fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-600/10 blur-[100px] pointer-events-none z-0"
></div>

{@render children()}
