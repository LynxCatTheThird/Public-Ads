export interface PublicServiceContent {
  id: number
  title: string
  description: string
  imageUrl: string
  link: string
  organization: string
}

export const useContent = () => {
  const contents: PublicServiceContent[] = [
    {
      id: 1,
      title: "保护环境，从我做起",
      description: "减少塑料使用，保护海洋生态",
      imageUrl: "/posters/manta-protection.png",
      link: "https://www.worldwildlife.org/",
      organization: "世界自然基金会"
    },
    {
      id: 2,
      title: "关爱留守儿童",
      description: "让每个孩子都能感受到温暖",
      imageUrl: "/posters/children-care.webp",
      link: "https://www.unicef.org/",
      organization: "联合国儿童基金会"
    },
    {
      id: 3,
      title: "无偿献血，传递生命",
      description: "您的一次献血，可能挽救三条生命",
      imageUrl: "/posters/blood-donation.jpg",
      link: "https://www.redcross.org/",
      organization: "红十字会"
    },
    {
      id: 4,
      title: "关注心理健康",
      description: "心理健康和身体健康同样重要",
      imageUrl: "/posters/mental-health.webp",
      link: "https://www.who.int/health-topics/mental-health",
      organization: "世界卫生组织"
    },
    {
      id: 5,
      title: "节约用水，珍惜资源",
      description: "每一滴水都值得珍惜",
      imageUrl: "/posters/water-conservation.jpg",
      link: "https://www.wateraid.org/",
      organization: "WaterAid"
    }
  ]

  const getRandomContent = (): PublicServiceContent => {
    const randomIndex = Math.floor(Math.random() * contents.length)
    return contents[randomIndex]
  }

  const getAllContents = (): PublicServiceContent[] => {
    return contents
  }

  return {
    getRandomContent,
    getAllContents
  }
}
