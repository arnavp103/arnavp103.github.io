<script setup lang="ts">
</script>

<template>
	<main class="h-full w-full overflow-x-hidden flex flex-col justify-center items-center">
		<div class="w-content">
			<h1 class="text-xl md:text-5xl font-semibold mt-4 inline-block text-center md:pl-1">
				<span> What I've been up to</span>
			</h1>
			<div class="text-xl [&>*]:my-6">
				<p>
					I'm spending the summer with a group of friends building Obelisk. It's a blogging social media similar to Twitter and Medium but with a focus on exploring different subcultures and communities.
					It's currently under wraps but we're interested in deploying it and seeing how it goes. It's been a great opportunity to learn about the full stack and how to build a web app from the ground up.
				</p>

        <p>
					I picked up Chess as a hobby last year, and I'm really enjoying it.
					I've got a Lichess Rapid Elo rating of 1400, and I'm hoping to get to 1600 by the end of summer.
					The eventual goal is to get good enough to beat a rudimentary chess bot that brute forces the search space with a basic material advantage heuristic (also of my making).
					<br/>
					Current Opening Repertoire: The Queen's Gambit, The Catalan Opening, The London System, The Sicilian Defence, The Queen's Indian Defence
				</p>

				<p>
					I'm taking a Machine Learning course this summer, where we explore popular machine learning algorithms and their applications.
					I'm interested to see the math behind the algorithms that've taken over the world, and I'm thinking of  writing a little neural net widget for my website in WebAssembly.
				</p>
			</div>
		</div>
	</main>
</template>


<style scoped>

h1 span {
	/* credits https://css-tricks.com/how-to-create-wavy-shapes-patterns-in-css/ */
  --c1: #2e88c7;
  --c2: #9ccce8;

  --_p: 93% 83.5% at;
  --_g1: radial-gradient(var(--_p) bottom, var(--c1) 79.5%, transparent 80%) no-repeat;
  --_g2: radial-gradient(var(--_p) top, transparent 79.5%, var(--c1) 80%) no-repeat;
  --_g3: radial-gradient(var(--_p) bottom, var(--c2) 79.5%, transparent 80%) no-repeat;
  --_g4: radial-gradient(var(--_p) top, transparent 79.5%, var(--c2) 80%) no-repeat;
  background:
    var(--_g1), var(--_g2), var(--_g1), var(--_g2),
    var(--_g3), var(--_g4), var(--_g3), var(--_g4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-stroke: 0.1rem var(--c1);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  animation:
    s 2s infinite alternate,
    m 3s infinite linear;
}

@keyframes m {
  0% {
    background-position:
      -200% 100%, -100% 100%, 0% 100%, 100% 100%,
      0% 100%, 100% 100%, 200% 100%, 300% 100%
  }

  100% {
    background-position:
      0% 100%, 100% 100%, 200% 100%, 300% 100%,
      -200% 100%, -100% 100%, 0% 100%, 100% 100%
  }
}

@keyframes s {
  0% {
    background-size:
      50.5% 60%, 50.5% 60%, 50.5% 60%, 50.5% 60%,
      50.5% 90%, 50.5% 90%, 50.5% 90%, 50.5% 90%
  }

  33% {
    background-size:
      50.5% 70%, 50.5% 70%, 50.5% 70%, 50.5% 70%,
      50.5% 75%, 50.5% 75%, 50.5% 75%, 50.5% 75%
  }

  66% {
    background-size:
      50.5% 55%, 50.5% 55%, 50.5% 55%, 50.5% 55%,
      50.5% 80%, 50.5% 80%, 50.5% 80%, 50.5% 80%
  }

  100% {
    background-size:
      50.5% 90%, 50.5% 90%, 50.5% 90%, 50.5% 90%,
      50.5% 95%, 50.5% 95%, 50.5% 95%, 50.5% 95%
  }
}

</style>