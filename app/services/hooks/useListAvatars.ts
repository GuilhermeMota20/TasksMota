import { useEffect, useState } from "react";

import avatar1 from '../../assets/avatars/av-1.svg';
import avatar2 from '../../assets/avatars/av-2.svg';
import avatar3 from '../../assets/avatars/av-3.svg';
import avatar4 from '../../assets/avatars/av-4.svg';
import avatar5 from '../../assets/avatars/av-5.svg';
import avatar6 from '../../assets/avatars/av-6.svg';
import avatar7 from '../../assets/avatars/av-7.svg';
import avatar8 from '../../assets/avatars/av-8.svg';
import avatar9 from '../../assets/avatars/av-9.svg';
import avatar10 from '../../assets/avatars/av-10.svg';
import avatar11 from '../../assets/avatars/av-11.svg';
import avatar12 from '../../assets/avatars/av-12.svg';
import avatar13 from '../../assets/avatars/av-13.svg';
import avatar14 from '../../assets/avatars/av-14.svg';
import { IsListAvatarsType } from "../../types/User";

export const useListAvatars = () => {
  const [listAvatars, setListAvatars] = useState<IsListAvatarsType[] | []>([]);

  useEffect(() => {
    setListAvatars([
      {url: avatar1, alt: 'Avatar 1'},
      {url: avatar2, alt: 'Avatar 2'},
      {url: avatar3, alt: 'Avatar 3'},
      {url: avatar4, alt: 'Avatar 4'},
      {url: avatar5, alt: 'Avatar 5'},
      {url: avatar6, alt: 'Avatar 6'},
      {url: avatar7, alt: 'Avatar 7'},
      {url: avatar8, alt: 'Avatar 8'},
      {url: avatar9, alt: 'Avatar 9'},
      {url: avatar10, alt: 'Avatar 10'},
      {url: avatar11, alt: 'Avatar 11'},
      {url: avatar12, alt: 'Avatar 12'},
      {url: avatar13, alt: 'Avatar 13'},
      {url: avatar14, alt: 'Avatar 14'},
    ]);
  }, [])

  return { listAvatars };
};