export interface Tag {
  id: number
  name: string
  // parent: Tag
  children: Tag[]
}

export interface Video {
  youtubeId: string
  title: string
  // tags: Tag[]
}

export interface DBTag {
  id: number
  name: string
  parentId: number
}

export interface DBVideo {
  youtubeId: string
  title: string
  tagIds: number[]
}
