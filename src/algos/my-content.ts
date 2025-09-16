// hotwife-cuckold.ts
// Simple algorithm: queries the public search endpoint for posts containing the keywords
import { BskyAgent } from '@atproto/api';

export default async function hotwifeCuckold(agent: BskyAgent, params: any) {
  // build the search query. You can add more keywords or phrases here.
  const query = '("cuckold" OR "hotwife" OR "#cuckold" OR "#hotwife") lang:en';
  const limit = params?.limit ?? 40;

  try {
    const res = await agent.app.bsky.feed.searchPosts({
      q: query,
      sort: 'latest',
      limit,
    });

    const posts = res.data?.posts ?? [];
    // Map to the skeleton shape expected by the starter-kit:
    const feed = posts.map((p: any) => ({ post: p.post.uri }));

    // Cursor handling: forward the underlying cursor (if present)
    const cursor = res.data?.cursor ?? null;
    return { feed, cursor };
  } catch (err) {
    console.error('hotwifeCuckold error', err);
    return { feed: [], cursor: null };
  }
}
