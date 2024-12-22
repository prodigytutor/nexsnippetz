export type SiteConfig = {
  name: string
  nameShort: string
  description: string
  url: string
  email: string
  version: string
  ogImage: string
  links: {
    twitter: string
    twitterHandle: string
    github: string
    discord: string
    linkedin: string
    youtube: string
  }
  author: {
    twitter: string
    github: string
    linkedin?: string
  }
}

export const siteConfig: SiteConfig = {
  name: "NexSnippetz",
  nameShort: "NexS",
  description:
    "An open source AI Micro Saas to help developer maintain a snippet toolbox.",
  url: "https://snippet.nexapps.online",
  email: "david@nexai.network",
  ogImage: "/web-shot.png",
  version: "0.1.0",
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    twitterHandle: "nexai",
    discord: "https://discord.gg/",
    linkedin: "https://www.linkedin.com/company/",
    youtube: "https://www.youtube.com/@",
  },
  author: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in//",
  },
}
