import * as React from 'react'
import { Tag as TagType } from '../types'

interface Props {
  tag: TagType
}

interface State {
  expanded: boolean
}

class Tag extends React.Component<Props, State> {
  public state = {
    expanded: false,
  }

  public render() {
    return (
      <div style={style}>
        <input type="checkbox" />
        {this.props.tag.children.length > 0 && (
          <span onClick={this.toggleExpand}>› </span>
        )}
        {this.props.tag.name}
        {this.state.expanded &&
          this.props.tag.children.map((tag) => <Tag key={tag.id} tag={tag} />)}
      </div>
    )
  }

  private toggleExpand = () => {
    this.setState((prevState) =>
      this.setState({ expanded: !prevState.expanded }),
    )
  }
}

const style = {
  textAlign: 'left' as 'left',
  marginLeft: '4px',
}

export default Tag
