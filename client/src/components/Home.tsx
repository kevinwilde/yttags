import * as React from 'react'
import { Redirect } from 'react-router-dom'
import * as auth from '../api/auth'
import { getTags, getVideos } from '../api/tags'
import Main from './Main'
import Sidebar from './Sidebar'

class Home extends React.Component {
  public state = {
    tags: [],
    videos: [],
    isLoggedIn: auth.isLoggedIn(),
  }

  public componentDidMount() {
    this.setState({
      tags: getTags(1),
      videos: getVideos(1, []),
    })
  }

  public render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <div style={{ textAlign: 'right' }}>
          <span onClick={this.logout}>Logout</span>
        </div>
        <div style={{ display: 'flex' }}>
          <Sidebar tags={this.state.tags} />
          <Main videos={this.state.videos} />
        </div>
      </>
    )
  }

  private logout = async () => {
    await auth.logout()
    this.setState({ isLoggedIn: auth.isLoggedIn() })
  }
}

export default Home
