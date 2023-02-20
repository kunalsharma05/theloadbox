/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuction = /* GraphQL */ `
  subscription OnCreateAuction($filter: ModelSubscriptionAuctionFilterInput) {
    onCreateAuction(filter: $filter) {
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
export const onUpdateAuction = /* GraphQL */ `
  subscription OnUpdateAuction($filter: ModelSubscriptionAuctionFilterInput) {
    onUpdateAuction(filter: $filter) {
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
export const onDeleteAuction = /* GraphQL */ `
  subscription OnDeleteAuction($filter: ModelSubscriptionAuctionFilterInput) {
    onDeleteAuction(filter: $filter) {
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
export const onCreateLane = /* GraphQL */ `
  subscription OnCreateLane($filter: ModelSubscriptionLaneFilterInput) {
    onCreateLane(filter: $filter) {
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
export const onUpdateLane = /* GraphQL */ `
  subscription OnUpdateLane($filter: ModelSubscriptionLaneFilterInput) {
    onUpdateLane(filter: $filter) {
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
export const onDeleteLane = /* GraphQL */ `
  subscription OnDeleteLane($filter: ModelSubscriptionLaneFilterInput) {
    onDeleteLane(filter: $filter) {
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
export const onCreateBid = /* GraphQL */ `
  subscription OnCreateBid($filter: ModelSubscriptionBidFilterInput) {
    onCreateBid(filter: $filter) {
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
export const onUpdateBid = /* GraphQL */ `
  subscription OnUpdateBid($filter: ModelSubscriptionBidFilterInput) {
    onUpdateBid(filter: $filter) {
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
export const onDeleteBid = /* GraphQL */ `
  subscription OnDeleteBid($filter: ModelSubscriptionBidFilterInput) {
    onDeleteBid(filter: $filter) {
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
