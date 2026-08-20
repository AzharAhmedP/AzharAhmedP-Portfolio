export interface ProjectSection {
  type: 'context' | 'vision' | 'product' | 'gallery' | 'architecture' | 'outcome'
  title: string
  body: string
  images?: string[]
  stats?: { label: string; value: string }[]
  layers?: { name: string; tech: string[]; description: string }[]
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  category: string
  year: number | string
  client: string
  role: string
  stack: string[]
  status: string
  heroImage?: string
  sections: ProjectSection[]
  showGithub?: boolean
  showLiveDemo?: boolean
  liveUrl?: string
  githubUrl?: string
  challenge?: { title: string; body: string }
  performance?: { label: string; value: string }[]
  dataset?: { label: string; value: string }[]
  nextSlug?: string
  nextTitle?: string
}
