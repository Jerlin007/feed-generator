import { AppBskyFeedDefs } from '@atproto/api'
import { FeedAlgo } from '../types'

export const cuckoldHotwifeFeed: FeedAlgo = {
  uri: 'at://did:plc:fngtx3scv6zkv33a5fcc2f5r/app.bsky.feed.generator/cuckold-hotwife',
  cid: '',
  creatorDid: 'did:plc:fngtx3scv6zkv33a5fcc2f5r',
  displayName: 'Cuckold & Hotwife Feed',
  description: 'Posts that mention cuckold or hotwife',
  filter: (post: AppBskyFeedDefs.FeedViewPost) => {
    const text = post.post.record.text?.toLowerCase() || ''
    return (
      text.includes('cuckold') ||
      text.includes('hotwife')
    )
  },
}

