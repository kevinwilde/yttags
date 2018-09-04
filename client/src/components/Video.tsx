import * as React from 'react'
import { Video as VideoType } from '../types'

interface Props {
  video: VideoType
}

class Video extends React.Component<Props> {
  public render() {
    return (
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${this.props.video.youtubeId}`}
          frameBorder="0"
          allowFullScreen={true}
        />
      </div>
    )
  }
}

export default Video
