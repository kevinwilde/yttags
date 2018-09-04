import * as React from 'react'
import { Video as VideoType } from '../types'
import Video from './Video'
import VideoList from './VideoList'

interface Props {
  videos: VideoType[]
}

interface State {
  currentIndex: number
}

class Main extends React.Component<Props, State> {
  public state = {
    currentIndex: 0,
  }

  public render() {
    const { videos } = this.props

    if (!videos.length) {
      return null
    }
    const currentVideo = videos[this.state.currentIndex]
    return (
      <div>
        <Video video={currentVideo} />
        <div>
          <button onClick={this.decrementIndex}>Prev</button>
          <button onClick={this.incrementIndex}>Next</button>
        </div>
        <VideoList
          videos={this.props.videos}
          onVideoClick={this.setCurrentIndex}
        />
      </div>
    )
  }

  private decrementIndex = () => {
    this.setState((prevState) => {
      const numVideos = this.props.videos.length
      const newIndex =
        prevState.currentIndex === 0
          ? numVideos - 1
          : prevState.currentIndex - 1

      return {
        currentIndex: newIndex,
      }
    })
  }

  private incrementIndex = () => {
    this.setState((prevState) => {
      const numVideos = this.props.videos.length
      const newIndex =
        prevState.currentIndex === numVideos - 1
          ? 0
          : prevState.currentIndex + 1

      return {
        currentIndex: newIndex,
      }
    })
  }

  private setCurrentIndex = (index: number) => {
    this.setState({ currentIndex: index })
  }
}

export default Main
