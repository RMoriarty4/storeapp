/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const provideDiscount = /* GraphQL */ `
  query ProvideDiscount($price: Float!, $age: Float!) {
    provideDiscount(price: $price, age: $age) {
      discountAmount
      discountedPrice
    }
  }
`;
export const getProductType = /* GraphQL */ `
  query GetProductType($id: ID!) {
    getProductType(id: $id) {
      id
      name
      products {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProductTypes = /* GraphQL */ `
  query ListProductTypes(
    $filter: ModelProductTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      price
      createdAt
      updatedAt
      productTypeProductsId
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        createdAt
        updatedAt
        productTypeProductsId
      }
      nextToken
    }
  }
`;
