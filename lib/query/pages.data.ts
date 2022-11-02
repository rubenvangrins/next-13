export const getAllSlugs = `
  query GetAllSlugs {
    pages(first: 1000) {
      nodes {
        uri
      }
    }
  }
`;

export const getCurrentSlug = `
  query GetCurrentSlug($id: ID!) {
    page(id: $id, idType: URI) {
      title
    }
  }
`;

export const getMenu = `
  query GetMenu($id: MenuLocationEnum!) {
    menuItems(where: {location: $id}) {
      nodes {
        id
        uri
        label
      }
    }
  }
`;

const imageQuery = `
  {
    altText
    mediaItemUrl
    imageBlendMode {
      luminosity
    }
  }
`;

const acfHero = `
  acfHero {
    metaDescription
    metaTitle
    metaImage {
      altText
      sourceUrl
    }
    hero {
      heading
      layout
      pageColor
      subheading
      image ${imageQuery}
    }
  }
`;

const getHeader = (postType: string) => {
  let query;

  if (postType === 'Test') {
    // query = acfProjectHero;
  } else {
    query = acfHero;
  }

  return query;
};

const acfProjectSettings = `
  acfProjectSettings {
    nextProject {
      ... on Project {
        uri
        title
        acfProjectSettings {
          featuredImages ${imageQuery}
        }
      }
    }
  }
`;

const acfComponents = (postType: string) => `
  acfComponents {
    components {
      ... on ${postType}_Acfcomponents_Components_Awards {
        fieldGroupName
        heading
        image ${imageQuery}
        awards {
          awardTitle
          awardsNumber
        }
      }

      ... on ${postType}_Acfcomponents_Components_DoubleImages {
        fieldGroupName
        firstImage ${imageQuery}
        firstVideo {
          mediaItemUrl
        }
        secondImage ${imageQuery}
        secondVideo {
          mediaItemUrl
        }
      }      

      ... on ${postType}_Acfcomponents_Components_CallToAction {
        fieldGroupName
        heading
        layout
        button {
          target
          title
          url
        }
      }

      ... on ${postType}_Acfcomponents_Components_Image {
        fieldGroupName
        layout
        image ${imageQuery}
      }

      ... on ${postType}_Acfcomponents_Components_ImageRow {
        fieldGroupName
        layout
        imageAlignment
        smallColumnsAlignment
        bigImage ${imageQuery}
        bigVideo {
          mediaItemUrl
        }
        columnsBigColumn {
          columnType
          text
          image ${imageQuery}
        }
        columnsSmallColumn {
          columnTypeSmall
          text
          image ${imageQuery}
        }
      }

      ... on ${postType}_Acfcomponents_Components_Intro {
        fieldGroupName
        chapeau
        heading
      }
      
      ... on ${postType}_Acfcomponents_Components_MarqueeImage {
        fieldGroupName
        image ${imageQuery}
        video {
          mediaItemUrl
        }
        marqueeText
      }

      ... on ${postType}_Acfcomponents_Components_Moodboard {
        fieldGroupName
        numberOfArticles
        instagramPosts {
          uri
          title
          image ${imageQuery}
        }
      }

      ... on ${postType}_Acfcomponents_Components_ProjectIntro {
        fieldGroupName
        body
        layout
        image ${imageQuery}
        specefications {
          description
          title
        }
      }

      ... on ${postType}_Acfcomponents_Components_Quote {
        fieldGroupName
        quote
        name
      }

      ... on ${postType}_Acfcomponents_Components_Swiper {
        fieldGroupName
        layout
        articleSlides {
          alignText
          article {
            ... on Article {
              uri
            }
          }
        }
        filmSlides {
          chapeau
          title
          vimeoLink
          videoPreview {
            altText
            mediaItemUrl
          }
          image ${imageQuery}
        }
      }

      ... on ${postType}_Acfcomponents_Components_Team {
        fieldGroupName
        body
        teamMembers {
          eMail
          name
          phoneNumber
          secondPhoneNumber
          image ${imageQuery}
        }
      }

      ... on ${postType}_Acfcomponents_Components_Text {
        fieldGroupName
        layout
        heading
        col1
        col2
      }

      ... on ${postType}_Acfcomponents_Components_TextImage {
        fieldGroupName
        imageSize
        layoutLargeImage
        layoutSmallImage
        heading
        body
        image ${imageQuery}
        video {
          mediaItemUrl
        }
      }

      ... on ${postType}_Acfcomponents_Components_Video {
        fieldGroupName
        layout
        vimeoUrl
        videoPreview {
          altText
          mediaItemUrl
        }
      }
    }
  }
`;

export const getMenus = `
  query GetMenus {
    menus {
      nodes {
        slug
        locations
        menuItems {
          nodes {
            url
            label
            path
            target
            connectedNode {
              node {
                ... on Page {
                  featuredImage {
                    node {
                      altText
                      mediaItemUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getPageBySlug = (postType: string) => `
  query GetPageBySlug($slug: ID!) {
    ${postType.toLowerCase()}(id: $slug, idType: URI) {
      date
      uri
      title

      template {
        templateName
      }

      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }

      ${postType === 'Project' ? acfProjectSettings : ''}
      ${getHeader(postType)}
      ${acfComponents(postType)}
    }
  }
`;
