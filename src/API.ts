/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAuctionInput = {
  id?: string | null,
  name: string,
  type: AuctionType,
  startAt: string,
  endAt: string,
  createdAt?: string | null,
  status: AuctionStatus,
  owner: string,
};

export enum AuctionType {
  LANE = "LANE",
  LOT = "LOT",
}


export enum AuctionStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}


export type ModelAuctionConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelAuctionTypeInput | null,
  startAt?: ModelStringInput | null,
  endAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelAuctionStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAuctionConditionInput | null > | null,
  or?: Array< ModelAuctionConditionInput | null > | null,
  not?: ModelAuctionConditionInput | null,
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

export type ModelAuctionTypeInput = {
  eq?: AuctionType | null,
  ne?: AuctionType | null,
};

export type ModelAuctionStatusInput = {
  eq?: AuctionStatus | null,
  ne?: AuctionStatus | null,
};

export type Auction = {
  __typename: "Auction",
  id: string,
  name: string,
  lanes?: ModelLaneConnection | null,
  type: AuctionType,
  startAt: string,
  endAt: string,
  createdAt: string,
  status: AuctionStatus,
  owner: string,
  updatedAt: string,
};

export type ModelLaneConnection = {
  __typename: "ModelLaneConnection",
  items:  Array<Lane | null >,
  nextToken?: string | null,
};

export type Lane = {
  __typename: "Lane",
  id: string,
  source: string,
  destination: string,
  truckType: string,
  trips: number,
  auction?: Auction | null,
  loadType: string,
  priceCap: number,
  bids?: ModelBidConnection | null,
  createdAt: string,
  updatedAt: string,
  auctionLanesId: string,
};

export type ModelBidConnection = {
  __typename: "ModelBidConnection",
  items:  Array<Bid | null >,
  nextToken?: string | null,
};

export type Bid = {
  __typename: "Bid",
  id: string,
  lane?: Lane | null,
  price: number,
  createdAt: string,
  olderPrices?: Array< number | null > | null,
  owner: string,
  updatedAt: string,
  laneBidsId: string,
};

export type UpdateAuctionInput = {
  id: string,
  name?: string | null,
  type?: AuctionType | null,
  startAt?: string | null,
  endAt?: string | null,
  createdAt?: string | null,
  status?: AuctionStatus | null,
  owner?: string | null,
};

export type DeleteAuctionInput = {
  id: string,
};

export type CreateLaneInput = {
  id?: string | null,
  source: string,
  destination: string,
  truckType: string,
  trips: number,
  loadType: string,
  priceCap: number,
  auctionLanesId: string,
};

export type ModelLaneConditionInput = {
  source?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  truckType?: ModelStringInput | null,
  trips?: ModelIntInput | null,
  loadType?: ModelStringInput | null,
  priceCap?: ModelFloatInput | null,
  and?: Array< ModelLaneConditionInput | null > | null,
  or?: Array< ModelLaneConditionInput | null > | null,
  not?: ModelLaneConditionInput | null,
  auctionLanesId?: ModelIDInput | null,
};

export type ModelIntInput = {
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

export type UpdateLaneInput = {
  id: string,
  source?: string | null,
  destination?: string | null,
  truckType?: string | null,
  trips?: number | null,
  loadType?: string | null,
  priceCap?: number | null,
  auctionLanesId?: string | null,
};

export type DeleteLaneInput = {
  id: string,
};

export type CreateBidInput = {
  id?: string | null,
  price: number,
  createdAt?: string | null,
  olderPrices?: Array< number | null > | null,
  owner: string,
  laneBidsId: string,
};

export type ModelBidConditionInput = {
  price?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  olderPrices?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBidConditionInput | null > | null,
  or?: Array< ModelBidConditionInput | null > | null,
  not?: ModelBidConditionInput | null,
  laneBidsId?: ModelIDInput | null,
};

export type UpdateBidInput = {
  id: string,
  price?: number | null,
  createdAt?: string | null,
  olderPrices?: Array< number | null > | null,
  owner?: string | null,
  laneBidsId?: string | null,
};

export type DeleteBidInput = {
  id: string,
};

export type ModelAuctionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelAuctionTypeInput | null,
  startAt?: ModelStringInput | null,
  endAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelAuctionStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAuctionFilterInput | null > | null,
  or?: Array< ModelAuctionFilterInput | null > | null,
  not?: ModelAuctionFilterInput | null,
};

export type ModelAuctionConnection = {
  __typename: "ModelAuctionConnection",
  items:  Array<Auction | null >,
  nextToken?: string | null,
};

export type ModelLaneFilterInput = {
  id?: ModelIDInput | null,
  source?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  truckType?: ModelStringInput | null,
  trips?: ModelIntInput | null,
  loadType?: ModelStringInput | null,
  priceCap?: ModelFloatInput | null,
  and?: Array< ModelLaneFilterInput | null > | null,
  or?: Array< ModelLaneFilterInput | null > | null,
  not?: ModelLaneFilterInput | null,
  auctionLanesId?: ModelIDInput | null,
};

export type ModelBidFilterInput = {
  id?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  olderPrices?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBidFilterInput | null > | null,
  or?: Array< ModelBidFilterInput | null > | null,
  not?: ModelBidFilterInput | null,
  laneBidsId?: ModelIDInput | null,
};

export type ModelSubscriptionAuctionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  startAt?: ModelSubscriptionStringInput | null,
  endAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  owner?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAuctionFilterInput | null > | null,
  or?: Array< ModelSubscriptionAuctionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLaneFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  source?: ModelSubscriptionStringInput | null,
  destination?: ModelSubscriptionStringInput | null,
  truckType?: ModelSubscriptionStringInput | null,
  trips?: ModelSubscriptionIntInput | null,
  loadType?: ModelSubscriptionStringInput | null,
  priceCap?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionLaneFilterInput | null > | null,
  or?: Array< ModelSubscriptionLaneFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBidFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  price?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  olderPrices?: ModelSubscriptionFloatInput | null,
  owner?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBidFilterInput | null > | null,
  or?: Array< ModelSubscriptionBidFilterInput | null > | null,
};

export type CreateAuctionMutationVariables = {
  input: CreateAuctionInput,
  condition?: ModelAuctionConditionInput | null,
};

export type CreateAuctionMutation = {
  createAuction?:  {
    __typename: "Auction",
    id: string,
    name: string,
    lanes?:  {
      __typename: "ModelLaneConnection",
      items:  Array< {
        __typename: "Lane",
        id: string,
        source: string,
        destination: string,
        truckType: string,
        trips: number,
        loadType: string,
        priceCap: number,
        createdAt: string,
        updatedAt: string,
        auctionLanesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: AuctionType,
    startAt: string,
    endAt: string,
    createdAt: string,
    status: AuctionStatus,
    owner: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuctionMutationVariables = {
  input: UpdateAuctionInput,
  condition?: ModelAuctionConditionInput | null,
};

export type UpdateAuctionMutation = {
  updateAuction?:  {
    __typename: "Auction",
    id: string,
    name: string,
    lanes?:  {
      __typename: "ModelLaneConnection",
      items:  Array< {
        __typename: "Lane",
        id: string,
        source: string,
        destination: string,
        truckType: string,
        trips: number,
        loadType: string,
        priceCap: number,
        createdAt: string,
        updatedAt: string,
        auctionLanesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: AuctionType,
    startAt: string,
    endAt: string,
    createdAt: string,
    status: AuctionStatus,
    owner: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuctionMutationVariables = {
  input: DeleteAuctionInput,
  condition?: ModelAuctionConditionInput | null,
};

export type DeleteAuctionMutation = {
  deleteAuction?:  {
    __typename: "Auction",
    id: string,
    name: string,
    lanes?:  {
      __typename: "ModelLaneConnection",
      items:  Array< {
        __typename: "Lane",
        id: string,
        source: string,
        destination: string,
        truckType: string,
        trips: number,
        loadType: string,
        priceCap: number,
        createdAt: string,
        updatedAt: string,
        auctionLanesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: AuctionType,
    startAt: string,
    endAt: string,
    createdAt: string,
    status: AuctionStatus,
    owner: string,
    updatedAt: string,
  } | null,
};

export type CreateLaneMutationVariables = {
  input: CreateLaneInput,
  condition?: ModelLaneConditionInput | null,
};

export type CreateLaneMutation = {
  createLane?:  {
    __typename: "Lane",
    id: string,
    source: string,
    destination: string,
    truckType: string,
    trips: number,
    auction?:  {
      __typename: "Auction",
      id: string,
      name: string,
      lanes?:  {
        __typename: "ModelLaneConnection",
        nextToken?: string | null,
      } | null,
      type: AuctionType,
      startAt: string,
      endAt: string,
      createdAt: string,
      status: AuctionStatus,
      owner: string,
      updatedAt: string,
    } | null,
    loadType: string,
    priceCap: number,
    bids?:  {
      __typename: "ModelBidConnection",
      items:  Array< {
        __typename: "Bid",
        id: string,
        price: number,
        createdAt: string,
        olderPrices?: Array< number | null > | null,
        owner: string,
        updatedAt: string,
        laneBidsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    auctionLanesId: string,
  } | null,
};

export type UpdateLaneMutationVariables = {
  input: UpdateLaneInput,
  condition?: ModelLaneConditionInput | null,
};

export type UpdateLaneMutation = {
  updateLane?:  {
    __typename: "Lane",
    id: string,
    source: string,
    destination: string,
    truckType: string,
    trips: number,
    auction?:  {
      __typename: "Auction",
      id: string,
      name: string,
      lanes?:  {
        __typename: "ModelLaneConnection",
        nextToken?: string | null,
      } | null,
      type: AuctionType,
      startAt: string,
      endAt: string,
      createdAt: string,
      status: AuctionStatus,
      owner: string,
      updatedAt: string,
    } | null,
    loadType: string,
    priceCap: number,
    bids?:  {
      __typename: "ModelBidConnection",
      items:  Array< {
        __typename: "Bid",
        id: string,
        price: number,
        createdAt: string,
        olderPrices?: Array< number | null > | null,
        owner: string,
        updatedAt: string,
        laneBidsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    auctionLanesId: string,
  } | null,
};

export type DeleteLaneMutationVariables = {
  input: DeleteLaneInput,
  condition?: ModelLaneConditionInput | null,
};

export type DeleteLaneMutation = {
  deleteLane?:  {
    __typename: "Lane",
    id: string,
    source: string,
    destination: string,
    truckType: string,
    trips: number,
    auction?:  {
      __typename: "Auction",
      id: string,
      name: string,
      lanes?:  {
        __typename: "ModelLaneConnection",
        nextToken?: string | null,
      } | null,
      type: AuctionType,
      startAt: string,
      endAt: string,
      createdAt: string,
      status: AuctionStatus,
      owner: string,
      updatedAt: string,
    } | null,
    loadType: string,
    priceCap: number,
    bids?:  {
      __typename: "ModelBidConnection",
      items:  Array< {
        __typename: "Bid",
        id: string,
        price: number,
        createdAt: string,
        olderPrices?: Array< number | null > | null,
        owner: string,
        updatedAt: string,
        laneBidsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    auctionLanesId: string,
  } | null,
};

export type CreateBidMutationVariables = {
  input: CreateBidInput,
  condition?: ModelBidConditionInput | null,
};

export type CreateBidMutation = {
  createBid?:  {
    __typename: "Bid",
    id: string,
    lane?:  {
      __typename: "Lane",
      id: string,
      source: string,
      destination: string,
      truckType: string,
      trips: number,
      auction?:  {
        __typename: "Auction",
        id: string,
        name: string,
        type: AuctionType,
        startAt: string,
        endAt: string,
        createdAt: string,
        status: AuctionStatus,
        owner: string,
        updatedAt: string,
      } | null,
      loadType: string,
      priceCap: number,
      bids?:  {
        __typename: "ModelBidConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      auctionLanesId: string,
    } | null,
    price: number,
    createdAt: string,
    olderPrices?: Array< number | null > | null,
    owner: string,
    updatedAt: string,
    laneBidsId: string,
  } | null,
};

export type UpdateBidMutationVariables = {
  input: UpdateBidInput,
  condition?: ModelBidConditionInput | null,
};

export type UpdateBidMutation = {
  updateBid?:  {
    __typename: "Bid",
    id: string,
    lane?:  {
      __typename: "Lane",
      id: string,
      source: string,
      destination: string,
      truckType: string,
      trips: number,
      auction?:  {
        __typename: "Auction",
        id: string,
        name: string,
        type: AuctionType,
        startAt: string,
        endAt: string,
        createdAt: string,
        status: AuctionStatus,
        owner: string,
        updatedAt: string,
      } | null,
      loadType: string,
      priceCap: number,
      bids?:  {
        __typename: "ModelBidConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      auctionLanesId: string,
    } | null,
    price: number,
    createdAt: string,
    olderPrices?: Array< number | null > | null,
    owner: string,
    updatedAt: string,
    laneBidsId: string,
  } | null,
};

export type DeleteBidMutationVariables = {
  input: DeleteBidInput,
  condition?: ModelBidConditionInput | null,
};

export type DeleteBidMutation = {
  deleteBid?:  {
    __typename: "Bid",
    id: string,
    lane?:  {
      __typename: "Lane",
      id: string,
      source: string,
      destination: string,
      truckType: string,
      trips: number,
      auction?:  {
        __typename: "Auction",
        id: string,
        name: string,
        type: AuctionType,
        startAt: string,
        endAt: string,
        createdAt: string,
        status: AuctionStatus,
        owner: string,
        updatedAt: string,
      } | null,
      loadType: string,
      priceCap: number,
      bids?:  {
        __typename: "ModelBidConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      auctionLanesId: string,
    } | null,
    price: number,
    createdAt: string,
    olderPrices?: Array< number | null > | null,
    owner: string,
    updatedAt: string,
    laneBidsId: string,
  } | null,
};

export type GetAuctionQueryVariables = {
  id: string,
};

export type GetAuctionQuery = {
  getAuction?:  {
    __typename: "Auction",
    id: string,
    name: string,
    lanes?:  {
      __typename: "ModelLaneConnection",
      items:  Array< {
        __typename: "Lane",
        id: string,
        source: string,
        destination: string,
        truckType: string,
        trips: number,
        loadType: string,
        priceCap: number,
        createdAt: string,
        updatedAt: string,
        auctionLanesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: AuctionType,
    startAt: string,
    endAt: string,
    createdAt: string,
    status: AuctionStatus,
    owner: string,
    updatedAt: string,
  } | null,
};

export type ListAuctionsQueryVariables = {
  filter?: ModelAuctionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuctionsQuery = {
  listAuctions?:  {
    __typename: "ModelAuctionConnection",
    items:  Array< {
      __typename: "Auction",
      id: string,
      name: string,
      lanes?:  {
        __typename: "ModelLaneConnection",
        nextToken?: string | null,
      } | null,
      type: AuctionType,
      startAt: string,
      endAt: string,
      createdAt: string,
      status: AuctionStatus,
      owner: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLaneQueryVariables = {
  id: string,
};

export type GetLaneQuery = {
  getLane?:  {
    __typename: "Lane",
    id: string,
    source: string,
    destination: string,
    truckType: string,
    trips: number,
    auction?:  {
      __typename: "Auction",
      id: string,
      name: string,
      lanes?:  {
        __typename: "ModelLaneConnection",
        nextToken?: string | null,
      } | null,
      type: AuctionType,
      startAt: string,
      endAt: string,
      createdAt: string,
      status: AuctionStatus,
      owner: string,
      updatedAt: string,
    } | null,
    loadType: string,
    priceCap: number,
    bids?:  {
      __typename: "ModelBidConnection",
      items:  Array< {
        __typename: "Bid",
        id: string,
        price: number,
        createdAt: string,
        olderPrices?: Array< number | null > | null,
        owner: string,
        updatedAt: string,
        laneBidsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    auctionLanesId: string,
  } | null,
};

export type ListLanesQueryVariables = {
  filter?: ModelLaneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLanesQuery = {
  listLanes?:  {
    __typename: "ModelLaneConnection",
    items:  Array< {
      __typename: "Lane",
      id: string,
      source: string,
      destination: string,
      truckType: string,
      trips: number,
      auction?:  {
        __typename: "Auction",
        id: string,
        name: string,
        type: AuctionType,
        startAt: string,
        endAt: string,
        createdAt: string,
        status: AuctionStatus,
        owner: string,
        updatedAt: string,
      } | null,
      loadType: string,
      priceCap: number,
      bids?:  {
        __typename: "ModelBidConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      auctionLanesId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBidQueryVariables = {
  id: string,
};

export type GetBidQuery = {
  getBid?:  {
    __typename: "Bid",
    id: string,
    lane?:  {
      __typename: "Lane",
      id: string,
      source: string,
      destination: string,
      truckType: string,
      trips: number,
      auction?:  {
        __typename: "Auction",
        id: string,
        name: string,
        type: AuctionType,
        startAt: string,
        endAt: string,
        createdAt: string,
        status: AuctionStatus,
        owner: string,
        updatedAt: string,
      } | null,
      loadType: string,
      priceCap: number,
      bids?:  {
        __typename: "ModelBidConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      auctionLanesId: string,
    } | null,
    price: number,
    createdAt: string,
    olderPrices?: Array< number | null > | null,
    owner: string,
    updatedAt: string,
    laneBidsId: string,
  } | null,
};

export type ListBidsQueryVariables = {
  filter?: ModelBidFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBidsQuery = {
  listBids?:  {
    __typename: "ModelBidConnection",
    items:  Array< {
      __typename: "Bid",
      id: string,
      lane?:  {
        __typename: "Lane",
        id: string,
        source: string,
        destination: string,
        truckType: string,
        trips: number,
        loadType: string,
        priceCap: number,
        createdAt: string,
        updatedAt: string,
        auctionLanesId: string,
      } | null,
      price: number,
      createdAt: string,
      olderPrices?: Array< number | null > | null,
      owner: string,
      updatedAt: string,
      laneBidsId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAuctionSubscriptionVariables = {
  filter?: ModelSubscriptionAuctionFilterInput | null,
};

export type OnCreateAuctionSubscription = {
  onCreateAuction?:  {
    __typename: "Auction",
    id: string,
    name: string,
    lanes?:  {
      __typename: "ModelLaneConnection",
      items:  Array< {
        __typename: "Lane",
        id: string,
        source: string,
        destination: string,
        truckType: string,
        trips: number,
        loadType: string,
        priceCap: number,
        createdAt: string,
        updatedAt: string,
        auctionLanesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: AuctionType,
    startAt: string,
    endAt: string,
    createdAt: string,
    status: AuctionStatus,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuctionSubscriptionVariables = {
  filter?: ModelSubscriptionAuctionFilterInput | null,
};

export type OnUpdateAuctionSubscription = {
  onUpdateAuction?:  {
    __typename: "Auction",
    id: string,
    name: string,
    lanes?:  {
      __typename: "ModelLaneConnection",
      items:  Array< {
        __typename: "Lane",
        id: string,
        source: string,
        destination: string,
        truckType: string,
        trips: number,
        loadType: string,
        priceCap: number,
        createdAt: string,
        updatedAt: string,
        auctionLanesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: AuctionType,
    startAt: string,
    endAt: string,
    createdAt: string,
    status: AuctionStatus,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuctionSubscriptionVariables = {
  filter?: ModelSubscriptionAuctionFilterInput | null,
};

export type OnDeleteAuctionSubscription = {
  onDeleteAuction?:  {
    __typename: "Auction",
    id: string,
    name: string,
    lanes?:  {
      __typename: "ModelLaneConnection",
      items:  Array< {
        __typename: "Lane",
        id: string,
        source: string,
        destination: string,
        truckType: string,
        trips: number,
        loadType: string,
        priceCap: number,
        createdAt: string,
        updatedAt: string,
        auctionLanesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    type: AuctionType,
    startAt: string,
    endAt: string,
    createdAt: string,
    status: AuctionStatus,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLaneSubscriptionVariables = {
  filter?: ModelSubscriptionLaneFilterInput | null,
};

export type OnCreateLaneSubscription = {
  onCreateLane?:  {
    __typename: "Lane",
    id: string,
    source: string,
    destination: string,
    truckType: string,
    trips: number,
    auction?:  {
      __typename: "Auction",
      id: string,
      name: string,
      lanes?:  {
        __typename: "ModelLaneConnection",
        nextToken?: string | null,
      } | null,
      type: AuctionType,
      startAt: string,
      endAt: string,
      createdAt: string,
      status: AuctionStatus,
      owner: string,
      updatedAt: string,
    } | null,
    loadType: string,
    priceCap: number,
    bids?:  {
      __typename: "ModelBidConnection",
      items:  Array< {
        __typename: "Bid",
        id: string,
        price: number,
        createdAt: string,
        olderPrices?: Array< number | null > | null,
        owner: string,
        updatedAt: string,
        laneBidsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    auctionLanesId: string,
  } | null,
};

export type OnUpdateLaneSubscriptionVariables = {
  filter?: ModelSubscriptionLaneFilterInput | null,
};

export type OnUpdateLaneSubscription = {
  onUpdateLane?:  {
    __typename: "Lane",
    id: string,
    source: string,
    destination: string,
    truckType: string,
    trips: number,
    auction?:  {
      __typename: "Auction",
      id: string,
      name: string,
      lanes?:  {
        __typename: "ModelLaneConnection",
        nextToken?: string | null,
      } | null,
      type: AuctionType,
      startAt: string,
      endAt: string,
      createdAt: string,
      status: AuctionStatus,
      owner: string,
      updatedAt: string,
    } | null,
    loadType: string,
    priceCap: number,
    bids?:  {
      __typename: "ModelBidConnection",
      items:  Array< {
        __typename: "Bid",
        id: string,
        price: number,
        createdAt: string,
        olderPrices?: Array< number | null > | null,
        owner: string,
        updatedAt: string,
        laneBidsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    auctionLanesId: string,
  } | null,
};

export type OnDeleteLaneSubscriptionVariables = {
  filter?: ModelSubscriptionLaneFilterInput | null,
};

export type OnDeleteLaneSubscription = {
  onDeleteLane?:  {
    __typename: "Lane",
    id: string,
    source: string,
    destination: string,
    truckType: string,
    trips: number,
    auction?:  {
      __typename: "Auction",
      id: string,
      name: string,
      lanes?:  {
        __typename: "ModelLaneConnection",
        nextToken?: string | null,
      } | null,
      type: AuctionType,
      startAt: string,
      endAt: string,
      createdAt: string,
      status: AuctionStatus,
      owner: string,
      updatedAt: string,
    } | null,
    loadType: string,
    priceCap: number,
    bids?:  {
      __typename: "ModelBidConnection",
      items:  Array< {
        __typename: "Bid",
        id: string,
        price: number,
        createdAt: string,
        olderPrices?: Array< number | null > | null,
        owner: string,
        updatedAt: string,
        laneBidsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    auctionLanesId: string,
  } | null,
};

export type OnCreateBidSubscriptionVariables = {
  filter?: ModelSubscriptionBidFilterInput | null,
};

export type OnCreateBidSubscription = {
  onCreateBid?:  {
    __typename: "Bid",
    id: string,
    lane?:  {
      __typename: "Lane",
      id: string,
      source: string,
      destination: string,
      truckType: string,
      trips: number,
      auction?:  {
        __typename: "Auction",
        id: string,
        name: string,
        type: AuctionType,
        startAt: string,
        endAt: string,
        createdAt: string,
        status: AuctionStatus,
        owner: string,
        updatedAt: string,
      } | null,
      loadType: string,
      priceCap: number,
      bids?:  {
        __typename: "ModelBidConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      auctionLanesId: string,
    } | null,
    price: number,
    createdAt: string,
    olderPrices?: Array< number | null > | null,
    owner: string,
    updatedAt: string,
    laneBidsId: string,
  } | null,
};

export type OnUpdateBidSubscriptionVariables = {
  filter?: ModelSubscriptionBidFilterInput | null,
};

export type OnUpdateBidSubscription = {
  onUpdateBid?:  {
    __typename: "Bid",
    id: string,
    lane?:  {
      __typename: "Lane",
      id: string,
      source: string,
      destination: string,
      truckType: string,
      trips: number,
      auction?:  {
        __typename: "Auction",
        id: string,
        name: string,
        type: AuctionType,
        startAt: string,
        endAt: string,
        createdAt: string,
        status: AuctionStatus,
        owner: string,
        updatedAt: string,
      } | null,
      loadType: string,
      priceCap: number,
      bids?:  {
        __typename: "ModelBidConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      auctionLanesId: string,
    } | null,
    price: number,
    createdAt: string,
    olderPrices?: Array< number | null > | null,
    owner: string,
    updatedAt: string,
    laneBidsId: string,
  } | null,
};

export type OnDeleteBidSubscriptionVariables = {
  filter?: ModelSubscriptionBidFilterInput | null,
};

export type OnDeleteBidSubscription = {
  onDeleteBid?:  {
    __typename: "Bid",
    id: string,
    lane?:  {
      __typename: "Lane",
      id: string,
      source: string,
      destination: string,
      truckType: string,
      trips: number,
      auction?:  {
        __typename: "Auction",
        id: string,
        name: string,
        type: AuctionType,
        startAt: string,
        endAt: string,
        createdAt: string,
        status: AuctionStatus,
        owner: string,
        updatedAt: string,
      } | null,
      loadType: string,
      priceCap: number,
      bids?:  {
        __typename: "ModelBidConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      auctionLanesId: string,
    } | null,
    price: number,
    createdAt: string,
    olderPrices?: Array< number | null > | null,
    owner: string,
    updatedAt: string,
    laneBidsId: string,
  } | null,
};
