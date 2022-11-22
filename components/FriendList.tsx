import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

import FriendCard from "../components/FriendCard"

const ALL_FRIENDS_ENDPOINT_URL = process.env.NEXT_PUBLIC_ALL_FRIENDS_ENDPOINT_URL!;
const ALL_FRIENDS_AUTH_KEY = process.env.NEXT_PUBLIC_ALL_FRIENDS_AUTH_KEY;

interface userName {
  first: string,
  last: string
}

interface location {
  latitude: number;
  longitude: number;
}

interface item {
  picture: string;
  name: userName;
  location: location;
}

const FriendList = () => {
  const [friends, setFriends] = useState<item[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await axios.get(ALL_FRIENDS_ENDPOINT_URL, {
          headers: {
            Authorization: ALL_FRIENDS_AUTH_KEY
          }
        })

        if (response.status === 200) {
          setFriends(response.data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    getFriends();
  }, []);

  const itemClicked = ({ location, name, picture }: item) => {
    router.push({
      pathname: '/friend',
      query: {
        picture,
        latitude: location.latitude,
        longitude: location.latitude,
        firstName: name.first,
        lastName: name.last
      }
    })
  }

  return (
    <>
      {friends.map((f, i) => {
        return (
          <FriendCard key={i} firstName={f.name.first} lastName={f.name.last} picture={f.picture} onClick={() => itemClicked(f)} />
        )
      })}
    </>
  )
}

export default FriendList;