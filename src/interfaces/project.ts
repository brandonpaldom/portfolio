export interface Project {
  id: string
  slug: string
  coverImage: string
  name: string
  tags: string[]
  description?: string
  client?: string
  url?: string
  github?: string
  offline?: boolean
  images?: string[]
  squareImage?: boolean
  projects?: SubProject[]
  development?: boolean
}

export interface SubProject {
  client: string
  url: string
  github?: string
  images: string[]
  offline?: boolean
}
