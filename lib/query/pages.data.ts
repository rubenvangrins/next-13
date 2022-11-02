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
