declare global {
  export interface Window {
    backButton: boolean;
    dataLayer: any;
    customTransition: string | null
  }
}
export interface ImageGlobalInterface {
  mediaItemUrl: string
  altText: string
  imageBlendMode?: {
    luminosity: boolean
  }
}

export interface VideoGlobalInterface {
  mediaItemUrl: string
  altText: string
}

export interface ButtonGlobalInterface {
  title: string
  url: string
  target: string
}

export interface TypoSizesGlobalInterface {
  size: 'typo-165' | 'typo-160' | 'typo-150' | 'typo-100' | 'typo-64' | 'typo-55' | 'typo-50' | 'typo-40' | 'typo-36' | 'typo-24' | 'typo-18' | 'typo-16'| 'typo-14' | 'typo-14-light'| 'typo-14-book' | 'typo-12'
}

export interface NavInterface {
  slug: string
  locations: string[]
  menuItems: {
    nodes: {
      label: string
      path: string
      target: string
      parentId?: string
      childItems: {
        nodes: {
          target: string
          label: string
          path: string
        }[]
      }
    }[]
  }
}

export interface GetMenusInterface {
  [key: string]: {
    label: string
    path: string
    target: string
    parentId?: string
    childItems: {
      nodes: {
        target: string
        label: string
        path: string
      }[]
    }
    connectedNode: {
      node: {
        featuredImage: {
          node: ImageGlobalInterface
        }
      }
    }
  }[]
}
