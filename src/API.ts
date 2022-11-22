/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductTypeInput = {
  id?: string | null,
  name: string,
};

export type ModelProductTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProductTypeConditionInput | null > | null,
  or?: Array< ModelProductTypeConditionInput | null > | null,
  not?: ModelProductTypeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ProductType = {
  __typename: "ProductType",
  id: string,
  name: string,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  price: number,
  createdAt: string,
  updatedAt: string,
  productTypeProductsId?: string | null,
};

export type UpdateProductTypeInput = {
  id: string,
  name?: string | null,
};

export type DeleteProductTypeInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  price: number,
  productTypeProductsId?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  productTypeProductsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  productTypeProductsId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type PriceInfo = {
  __typename: "PriceInfo",
  discountAmount: number,
  discountedPrice: number,
};

export type ModelProductTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProductTypeFilterInput | null > | null,
  or?: Array< ModelProductTypeFilterInput | null > | null,
  not?: ModelProductTypeFilterInput | null,
};

export type ModelProductTypeConnection = {
  __typename: "ModelProductTypeConnection",
  items:  Array<ProductType | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  productTypeProductsId?: ModelIDInput | null,
};

export type CreateProductTypeMutationVariables = {
  input: CreateProductTypeInput,
  condition?: ModelProductTypeConditionInput | null,
};

export type CreateProductTypeMutation = {
  createProductType?:  {
    __typename: "ProductType",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductTypeMutationVariables = {
  input: UpdateProductTypeInput,
  condition?: ModelProductTypeConditionInput | null,
};

export type UpdateProductTypeMutation = {
  updateProductType?:  {
    __typename: "ProductType",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductTypeMutationVariables = {
  input: DeleteProductTypeInput,
  condition?: ModelProductTypeConditionInput | null,
};

export type DeleteProductTypeMutation = {
  deleteProductType?:  {
    __typename: "ProductType",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    productTypeProductsId?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    productTypeProductsId?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    productTypeProductsId?: string | null,
  } | null,
};

export type ProvideDiscountQueryVariables = {
  price: number,
  age: number,
};

export type ProvideDiscountQuery = {
  provideDiscount?:  {
    __typename: "PriceInfo",
    discountAmount: number,
    discountedPrice: number,
  } | null,
};

export type GetProductTypeQueryVariables = {
  id: string,
};

export type GetProductTypeQuery = {
  getProductType?:  {
    __typename: "ProductType",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductTypesQueryVariables = {
  filter?: ModelProductTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductTypesQuery = {
  listProductTypes?:  {
    __typename: "ModelProductTypeConnection",
    items:  Array< {
      __typename: "ProductType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    productTypeProductsId?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      createdAt: string,
      updatedAt: string,
      productTypeProductsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};
