export const getAllSlugs = `
  query GetAllSlugs {
    pages(first: 1000) {
      nodes {
        uri
      }
    }
  }
`;

export const getPageData = `
  query GetCurrentSlug($id: ID!) {
    page(id: $id, idType: URI) {
      __typename
      title
      content
      acfComponents {
        components {
          __typename
          ... on Page_Acfcomponents_Components_Text {
            body
          }
        }
      }
      featuredImage {
        node {
          altText
        }
      }
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

export const getAllProjects = `
  query GetAllProjects {
    allProjects {
      nodes {
        title
      }
    }
  }
`;
