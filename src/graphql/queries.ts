/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuction = /* GraphQL */ `
  query GetAuction($id: ID!) {
    getAuction(id: $id) {
      id
      name
      lanes {
        items {
          id
          source
          destination
          truckType
          trips
          loadType
          priceCap
          createdAt
          updatedAt
          auctionLanesId
        }
        nextToken
      }
      type
      startAt
      endAt
      createdAt
      status
      owner
      updatedAt
    }
  }
`;
export const listAuctions = /* GraphQL */ `
  query ListAuctions(
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lanes {
          nextToken
        }
        type
        startAt
        endAt
        createdAt
        status
        owner
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLane = /* GraphQL */ `
  query GetLane($id: ID!) {
    getLane(id: $id) {
      id
      source
      destination
      truckType
      trips
      auction {
        id
        name
        lanes {
          nextToken
        }
        type
        startAt
        endAt
        createdAt
        status
        owner
        updatedAt
      }
      loadType
      priceCap
      bids {
        items {
          id
          price
          createdAt
          olderPrices
          owner
          updatedAt
          laneBidsId
        }
        nextToken
      }
      createdAt
      updatedAt
      auctionLanesId
    }
  }
`;
export const listLanes = /* GraphQL */ `
  query ListLanes(
    $filter: ModelLaneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        source
        destination
        truckType
        trips
        auction {
          id
          name
          type
          startAt
          endAt
          createdAt
          status
          owner
          updatedAt
        }
        loadType
        priceCap
        bids {
          nextToken
        }
        createdAt
        updatedAt
        auctionLanesId
      }
      nextToken
    }
  }
`;
export const getBid = /* GraphQL */ `
  query GetBid($id: ID!) {
    getBid(id: $id) {
      id
      lane {
        id
        source
        destination
        truckType
        trips
        auction {
          id
          name
          type
          startAt
          endAt
          createdAt
          status
          owner
          updatedAt
        }
        loadType
        priceCap
        bids {
          nextToken
        }
        createdAt
        updatedAt
        auctionLanesId
      }
      price
      createdAt
      olderPrices
      owner
      updatedAt
      laneBidsId
    }
  }
`;
export const listBids = /* GraphQL */ `
  query ListBids(
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lane {
          id
          source
          destination
          truckType
          trips
          loadType
          priceCap
          createdAt
          updatedAt
          auctionLanesId
        }
        price
        createdAt
        olderPrices
        owner
        updatedAt
        laneBidsId
      }
      nextToken
    }
  }
`;
