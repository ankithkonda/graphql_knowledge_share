import { gql } from 'apollo-boost';

export const GreetingQuery = gql`
    query Greeting($name: String!) {
        greeting(name: $name) {
            name
            age
        }
    }
`;
