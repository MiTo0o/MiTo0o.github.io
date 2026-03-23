<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import Signature from '$lib/components/Signature.svelte';

	let currentTime = $state('');

	function updateTime() {
		currentTime = new Date().toLocaleTimeString('en-US', {
			timeZone: 'America/New_York',
			hour12: false,
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	onMount(() => {
		updateTime();
		const timer = setInterval(updateTime, 60000);
		return () => clearInterval(timer);
	});

	const experience = [
		{
			role: 'Software Engineering Intern',
			company: 'Georgia Tech Research Institute',
			period: 'Jan 2025 — May 2025',
			description:
				'Built and refactored a full-stack, web-based test runner using Svelte 5 and FastAPI. Migrated the backend to SQLite with WAL mode, and created end-to-end Playwright tests integrated into a GitLab CI/CD pipeline.'
		},
		{
			role: 'Software Engineering Intern',
			company: 'Naval Surface Warfare Center (Crane)',
			period: 'May 2024 — Aug 2024',
			description:
				'Worked on the GBAD software integration team for the MADIS project. Applied cyber hardening techniques to enhance system security and executed system-wide testing to resolve critical performance issues.'
		},
		{
			role: 'Software Engineer',
			company: 'AT&T (Contract via Tech Mahindra)',
			period: 'Nov 2022 — June 2023',
			description:
				'Collaborated to migrate legacy data to Snowflake DB on Azure. Developed real-time Grafana and Power BI dashboards to monitor a data loading system processing 80,000 files (30+GB) daily.'
		}
	];

	const projects = [
		{
			name: 'Lichess Puzzle Bot',
			description:
				'A TypeScript Discord bot that delivers daily chess puzzles to 3500+ users in 15+ channels. Deployed on Fly.io with Docker and Sentry.io monitoring.',
			role: 'Creator',
			year: '2022 — Pres.',
			icon: 'terminal',
			link: 'https://github.com/MiTo0o/lichess-daily-puzzle-discord-bot'
		},
		{
			name: 'Dog Gallery',
			description:
				'A web-based image gallery dedicated to dogs. A fun side project built to showcase frontend development and image data handling.',
			role: 'Personal',
			year: '2024',
			icon: 'globe',
			link: 'https://doggos.derzan.dev'
		}
	];
</script>

<div class="relative max-w-3xl mx-auto px-6 py-12 md:py-24 z-10">
	<!-- Navigation / Header -->
	{#if currentTime}
		<header
			in:fly={{ y: -20, duration: 1000, delay: 100 }}
			class="flex justify-between items-center mb-24 text-sm font-medium text-slate-500"
		>
			<div class="flex items-center gap-2">
				<div
					class="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="text-cyan-400"
						><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"
						></line></svg
					>
				</div>
				<span class="text-slate-200 tracking-wider font-semibold uppercase">D. CHIANG</span>
			</div>
			<div
				class="flex items-center space-x-3 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800 backdrop-blur-sm"
			>
				<span class="text-cyan-100/70">SYS.TIME {currentTime}</span>
				<div
					class="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"
				></div>
			</div>
		</header>

		<main>
			<!-- Hero Section -->
			<section in:fly={{ y: 20, duration: 1000, delay: 300 }} class="mb-24">
				<h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-8">
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
						Hi, I'm
					</span>
					<span
						class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] ml-3"
					>
						Derzan.
					</span>
				</h1>

				<div class="text-slate-400 text-lg leading-relaxed max-w-2xl mb-4 space-y-5">
					<p>
						I'm a full-stack developer who loves building fun and useful side projects. I try to
						write code that solves actual problems, and spend my downtime playing basketball,
						gaming, and hunting down good food.
					</p>
				</div>

				<Signature />

				<!-- Terminal Glowing CTA -->
				<a
					href="https://portfolio.derzan.dev"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center p-1.5 pr-6 bg-slate-900/80 border border-cyan-500/30 rounded-full hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group backdrop-blur-md"
				>
					<div
						class="bg-cyan-500/20 p-2.5 rounded-full mr-4 group-hover:bg-cyan-500/30 transition-colors shadow-[0_0_10px_rgba(34,211,238,0.2)]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="text-cyan-300 group-hover:text-cyan-200"
							><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"
							></line></svg
						>
					</div>
					<div class="flex flex-col">
						<span
							class="text-sm font-semibold text-cyan-100 tracking-wide group-hover:text-white transition-colors"
							>Access Terminal Portfolio</span
						>
						<div class="flex items-center text-xs text-cyan-500/70 font-mono mt-0.5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="mr-1"><polyline points="9 18 15 12 9 6"></polyline></svg
							>
							<span>https://portfolio.derzan.dev</span>
						</div>
					</div>
				</a>
			</section>

			<!-- Experience Timeline -->
			<section in:fly={{ y: 20, duration: 1000, delay: 500 }} class="mb-24">
				<div class="flex items-center gap-4 mb-10">
					<div class="h-[1px] w-8 bg-cyan-500/30"></div>
					<h2
						class="text-sm font-bold tracking-widest text-cyan-400 uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
					>
						Experience
					</h2>
					<div class="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
				</div>

				<div class="relative border-l border-slate-800 ml-3 space-y-12">
					{#each experience as job}
						<div class="relative pl-8 group">
							<!-- Glowing dot on the timeline -->
							<div
								class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-600 group-hover:bg-cyan-400 group-hover:border-cyan-300 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300"
							></div>

							<div class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
								<div>
									<span
										class="text-slate-200 font-bold tracking-wide group-hover:text-white transition-colors"
										>{job.role}</span
									>
									<span class="text-cyan-400/80 text-sm ml-2">— {job.company}</span>
								</div>
								<span class="text-slate-500 text-xs font-mono mt-1 md:mt-0 uppercase"
									>{job.period}</span
								>
							</div>
							{#if job.description}
								<p class="text-slate-400 text-sm leading-relaxed max-w-3xl mt-3">
									{job.description}
								</p>
							{/if}
						</div>
					{/each}
				</div>
			</section>

			<!-- Selected Works -->
			<section in:fly={{ y: 20, duration: 1000, delay: 700 }} class="mb-24">
				<div class="flex items-center gap-4 mb-8">
					<div class="h-[1px] w-8 bg-cyan-500/30"></div>
					<h2
						class="text-sm font-bold tracking-widest text-cyan-400 uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
					>
						Selected Projects
					</h2>
					<div class="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
				</div>

				<div class="space-y-4">
					{#each projects as project}
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							class="group relative bg-slate-900/40 border border-slate-800 p-6 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-hidden block hover:border-cyan-500/50 hover:bg-slate-900/80 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]"
						>
							<!-- Hover Glow Effect -->
							<div
								class="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
							></div>

							<div class="relative z-10 flex-1">
								<div class="flex items-center gap-3 mb-2">
									<div
										class="text-slate-500 transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
									>
										{#if project.icon === 'terminal'}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												><polyline points="4 17 10 11 4 5"></polyline><line
													x1="12"
													y1="19"
													x2="20"
													y2="19"
												></line></svg
											>
										{:else if project.icon === 'globe'}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												><circle cx="12" cy="12" r="10"></circle><line
													x1="2"
													y1="12"
													x2="22"
													y2="12"
												></line><path
													d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
												></path></svg
											>
										{/if}
									</div>
									<h3
										class="text-lg font-bold text-slate-200 transition-colors group-hover:text-white"
									>
										{project.name}
									</h3>
								</div>
								<p
									class="text-sm text-slate-400 max-w-md transition-colors group-hover:text-slate-300"
								>
									{project.description}
								</p>
							</div>

							<div
								class="relative z-10 flex items-center gap-4 md:gap-6 text-sm font-mono text-slate-500 mt-4 md:mt-0"
							>
								<span
									class="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-200 uppercase"
								>
									{project.role}
								</span>
								<span class="uppercase">{project.year}</span>

								<div
									class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="text-slate-400 group-hover:text-cyan-300"
										><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"
										></polyline></svg
									>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</section>

			<!-- Contact / Footer -->
			<footer
				in:fade={{ duration: 1000, delay: 900 }}
				class="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative"
			>
				<div
					class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
				></div>
				<div class="text-sm text-slate-500">
					© {new Date().getFullYear()} Derzan Chiang. All rights reserved.
				</div>
				<div class="flex gap-6">
					<a
						href="Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						class="text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all flex items-center gap-2 text-sm font-medium"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline
								points="14 2 14 8 20 8"
							></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line
								x1="16"
								y1="17"
								x2="8"
								y2="17"
							></line><polyline points="10 9 9 9 8 9"></polyline></svg
						>
						<span>Resume</span>
					</a>
					<a
						href="https://linkedin.com/in/derzan"
						target="_blank"
						rel="noopener noreferrer"
						class="text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all flex items-center gap-2 text-sm font-medium"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-linkedin"
							viewBox="0 0 16 16"
						>
							<path
								d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
							/>
						</svg>
						<span>Connect</span>
					</a>
					<a
						href="https://github.com/MiTo0o"
						target="_blank"
						rel="noopener noreferrer"
						class="text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all flex items-center gap-2 text-sm font-medium"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path
								d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
							></path></svg
						>
						<span>Source</span>
					</a>
				</div>
			</footer>
		</main>
	{/if}
</div>
