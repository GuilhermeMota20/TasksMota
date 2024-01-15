import imgFemaleOne from '../../assets/avatar_female_one.svg';
import imgFemaleTwo from '../../assets/avatar_female_one.svg';
import imgMaleOne from '../../assets/avatar_female_one.svg';
import imgMaleTwo from '../../assets/avatar_female_one.svg';

export default function RandomAvatar() {
  const getRandomImage = () => {
    const images = [imgMaleOne, imgFemaleOne, imgFemaleTwo, imgMaleTwo];
    const randomIndex = Math?.floor(Math?.random() * images?.length);
    return images[randomIndex];
  };

  return getRandomImage();
};