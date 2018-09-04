import { DBVideo, Tag } from '../types'

export const getTags = (userId: number): Tag[] => {
  return [
    {
      id: 1,
      name: 'My Music',
      children: [
        {
          id: 2,
          name: 'Selena Gomez',
          children: [],
        },
        {
          id: 3,
          name: 'Anne Marie',
          children: [],
        },
      ],
    },
  ]
}

export const getVideos = (userId: number, tagIds: number[]): DBVideo[] => {
  return [
    {
      youtubeId: 'Il-an3K9pjg',
      title: 'Anne-Marie - 2002',
      tagIds: [3],
    },
    {
      youtubeId: 'XeKoCLVXKNo',
      title: "David Guetta feat. Anne-Marie - Don't Leave Me Alone",
      tagIds: [3],
    },
    {
      youtubeId: 'papuvlVeZg8',
      title: 'Clean Bandit - Rockabye ft. Sean Paul & Anne-Marie',
      tagIds: [3],
    },
    {
      youtubeId: 'u3VTKvdAuIY',
      title: "Kygo, Selena Gomez - It Ain't Me",
      tagIds: [2],
    },
    {
      youtubeId: '3AtDnEC4zak',
      title: "Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez)",
      tagIds: [2],
    },
    {
      youtubeId: 'cH4E_t3m3xM',
      title: 'Selena Gomez, Marshmello - Wolves',
      tagIds: [2],
    },
    {
      youtubeId: 'VY1eFxgRR-k',
      title: 'Selena Gomez - Back To You',
      tagIds: [2],
    },
  ]
}
