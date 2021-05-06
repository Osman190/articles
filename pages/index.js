import { useQuery } from '@apollo/client';
import { GET_ALL_LETTERS } from '../lib/queries/getLetter';
import { initializeApollo } from '../lib/apollo';
import OneLetter from '../components/oneLetter'


export default function Home() {
  const { data, error, loading } = useQuery(GET_ALL_LETTERS);

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data.letters.length === 0) return <h2>404 | Product Not Found</h2>;
  if (data?.letters.map(letter => letter.userID === null)) {

    return (
      <div className="main">
        <h1 calssName="head"> <strong>Home</strong></h1>
        <div>

          {(data?.letters.map((letter, i) => {
            return (
              <div>
                <h2>Title</h2>
                <p classNAme="ph" key={i}>{letter.news}</p>
              </div>
            )
          }
          ))}
        </div>
      </div>
    );
  } else {
    <OneLetter />
  }
}
export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_LETTERS,

  });
  return { props: { initialApolloState: apolloClient.cache.extract(), }, revalidate: 1, };
};
