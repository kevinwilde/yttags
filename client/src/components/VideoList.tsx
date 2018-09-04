import * as React from 'react'
import { Video as VideoType } from '../types'

interface Props {
  videos: VideoType[]
  onVideoClick(index: number): void
}

class VideoList extends React.Component<Props> {
  public render() {
    return (
      <div>
        {this.props.videos.map((video, index) => (
          <div
            key={video.youtubeId}
            onClick={() => this.props.onVideoClick(index)}
          >
            {video.title}
          </div>
        ))}
      </div>
    )
  }
}

export default VideoList
