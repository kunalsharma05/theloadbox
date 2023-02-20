/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuction = /* GraphQL */ `
  mutation CreateAuction(
    $input: CreateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    createAuction(input: $input, condition: $condition) {
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
export const updateAuction = /* GraphQL */ `
  mutation UpdateAuction(
    $input: UpdateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    updateAuction(input: $input, condition: $condition) {
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
export const deleteAuction = /* GraphQL */ `
  mutation DeleteAuction(
    $input: DeleteAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    deleteAuction(input: $input, condition: $condition) {
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
export const createLane = /* GraphQL */ `
  mutation CreateLane(
    $input: CreateLaneInput!
    $condition: ModelLaneConditionInput
  ) {
    createLane(input: $input, condition: $condition) {
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
export const updateLane = /* GraphQL */ `
  mutation UpdateLane(
    $input: UpdateLaneInput!
    $condition: ModelLaneConditionInput
  ) {
    updateLane(input: $input, condition: $condition) {
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
export const deleteLane = /* GraphQL */ `
  mutation DeleteLane(
    $input: DeleteLaneInput!
    $condition: ModelLaneConditionInput
  ) {
    deleteLane(input: $input, condition: $condition) {
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
export const createBid = /* GraphQL */ `
  mutation CreateBid(
    $input: CreateBidInput!
    $condition: ModelBidConditionInput
  ) {
    createBid(input: $input, condition: $condition) {
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
export const updateBid = /* GraphQL */ `
  mutation UpdateBid(
    $input: UpdateBidInput!
    $condition: ModelBidConditionInput
  ) {
    updateBid(input: $input, condition: $condition) {
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
export const deleteBid = /* GraphQL */ `
  mutation DeleteBid(
    $input: DeleteBidInput!
    $condition: ModelBidConditionInput
  ) {
    deleteBid(input: $input, condition: $condition) {
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
