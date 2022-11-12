import endpoint from "utils/endpoint";

export const signInUserEndpoint = endpoint('post', '/user/sign-in-admin');
export const fetchUsersListEndpoint = endpoint('get', '/user');