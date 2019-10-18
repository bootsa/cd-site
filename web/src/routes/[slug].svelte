<script context="module">
  import blocksToHtml from "@sanity/block-content-to-html";
  import client from "../sanityClient";
  import serializers from "../components/serializers";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "page" && slug.current == $slug][0]';
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
    const page = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));
    return {
      page: {
        ...page,
        body: blocksToHtml({
          blocks: page.body,
          serializers,
          ...client.clientConfig
        })
      }
    };
  }
</script>

<script>
  export let page;
</script>

<svelte:head>
  <title>{page.title}</title>
</svelte:head>


<h1>{page.title}</h1>

<div class="content">
  {@html page.body}
</div>
