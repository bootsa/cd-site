<script context="module">
  import client from '../../sanityClient'
	export function preload({ params, query }) {
    return client.fetch('*[_type == "project" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)').then(projects => {
			return { projects };
		}).catch(err => this.error(500, err));
	}
</script>

<script>
  export let projects;

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<h1>Projects</h1>

<ul>
	{#each projects as project}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{project.slug.current}'>{project.title}</a> ({formatDate(project.publishedAt)})</li>
	{/each}
</ul>
