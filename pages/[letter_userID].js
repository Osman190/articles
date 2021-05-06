import { useQuery } from '@apollo/client';
import GET_LETTER_BY_ID from '../lib/queries/getLetter';
import { initializeApollo } from '../lib/apollo';

export default function Letter({ queryId }) {
  const { data, loading, error } = useQuery(GET_LETTER_BY_ID, {
    variables: { userID: queryId },
  });

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data.letters.length === 0) return <h2>404 | Product Not Found</h2>;

  return (
    <div>
      <h2>{data.letters.map((letter, i) => console.log(letter[i]))}</h2>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const queryId = query.product_id;

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_LETTER_BY_ID,
    variables: { userID: queryId },
  });
  return {
    props: { initialApolloState: apolloClient.cache.extract(), queryId },
  };
};