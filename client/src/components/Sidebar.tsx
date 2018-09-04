import * as React from 'react'
import { Tag as TagType } from '../types'
import Tag from './Tag'

interface Props {
  tags: TagType[]
}

class Sidebar extends React.Component<Props> {
  public render() {
    return (
      <div>
        {this.props.tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
    )
  }
}

export default Sidebar
