import { Auth, API } from 'aws-amplify';
// import {CognitoUser} from '@aws-amplify/auth';
// import { GraphQLAPI, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import * as GQL from '../../graphql';

export const getCurrentAuthenticatedUser = async () => {
    const user = await Auth.currentAuthenticatedUser().catch(() => null);
    return user.username;
  }

export const fetchAuctionsForAuthenticatedShipper = async (variables: GQL.ListAuctionsQueryVariables) => {
    try {
      const response = await API.graphql({
        query: GQL.listAuctions,
        variables: { ...variables },
        // authMode: GRAPHQL_AUTH_MODE.API_KEY
      })
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };