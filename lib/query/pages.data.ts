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
      title

      contentType {
        node {
          graphqlSingleName
        }
      }

      acfComponents {
        components {
          ... on Page_Acfcomponents_Components_Text {
            fieldGroupName
            body
          }
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
