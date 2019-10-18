<script context="module">
  import blocksToHtml from "@sanity/block-content-to-html";
  import client from "../../sanityClient";
  import serializers from "../../components/serializers";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "project" && slug.current == $slug][0]';
    const projection = `{
      ...,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            author->
          }
        }
      }
    }`;

    const query = filter + projection;
    const project = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));
    return {
      project: {
        ...project,
        body: blocksToHtml({
          blocks: project.body,
          serializers,
          ...client.clientConfig
        })
      }
    };
  }
</script>

<script>
  export let project;
</script>

<svelte:head>
  <title>Project: {project.title}</title>
</svelte:head>


<h1>{project.title}</h1>

<div class="content">
  {@html project.body}
</div>
