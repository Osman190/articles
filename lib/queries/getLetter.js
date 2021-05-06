
import { gql } from "@apollo/client";

export  const GET_Letter_BY_ID = gql`
query GetLetter($userID: String!) {
    letters(where: { _or: [{ userID: $userID }] }) {
      id
      userID
      news
      categories {
        name
      }
    }
  }  
`;

export const GET_ALL_LETTERS = gql`
query allLetters {
  letters {
    id
    userID 
    news
    categories {
      name
    }
  }
} 
`