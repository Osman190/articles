import { useQuery } from '@apollo/client';
import { GET_ALL_LETTERS } from '../lib/queries/getLetter';
import { initializeApollo } from '../lib/apollo'
import Head from 'next/head'
import OneLetter from '../components/oneLetter'
import Navigation from '../components/navBar'
import Footer from '../components/footer'


export default function Home() {
  
  const { data, error, loading } = useQuery(GET_ALL_LETTERS);

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data.letters.length === 0) return <h2>404 | Product Not Found</h2>;
  if (data?.letters.map(letter => letter.userID === null)) {

    return (
       <>
        <Head>
        <title>addON Solution</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <h1 className="headLine">Read Some Articles About what we are doing.....</h1>
      <div className={``}>
        <div className="row">
          {(data?.letters.map((letter, i) => {
            return (
              <div className="essay col-6" key={i}>
                <h2 className="">Title</h2>
                <p className="ph" >{letter.news}</p>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                  < span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Read More</span>
                </button>
                </div>
            )
          }
          ))}
        </div>
      </div>
      <Footer />
   </>
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
