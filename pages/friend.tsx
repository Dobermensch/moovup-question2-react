import Head from 'next/head'
import { useRouter } from 'next/router'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { encode } from 'querystring'

import FriendCard from "../components/FriendCard"
import styles from "../styles/shared.module.css"
import Header from '../components/Header'

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

const containerStyle = {
  width: '100%',
  height: '400px'
};

const Friend = () => {
  const router = useRouter();
  const params: URLSearchParams = new URLSearchParams(encode(router.query));
  const latitude: number = parseFloat(params.get("latitude")!);
  const longitude: number = parseFloat(params.get("longitude")!);
  const firstName: string = params.get("firstName")!;
  const lastName: string = params.get("lastName")!;
  const picture: string = params.get("picture")!;

  return (
    <div className={styles.container}>
      <Head>
        <title>Moovup</title>
        <meta name="description" content="Question 2 in Moovup take home test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title={"Your Friend"} />

        <LoadScript
          googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={10}
          >
            <Marker position={{ lat: latitude, lng: longitude }} />
          </GoogleMap>
        </LoadScript>

        <FriendCard firstName={firstName} lastName={lastName} picture={picture} />
      </main>
    </div>
  )
}

export default Friend;