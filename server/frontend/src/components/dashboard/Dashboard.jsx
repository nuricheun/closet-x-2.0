import { useEffect, useState } from 'react'
import SliderComponent from "../slider/ImgSliderComponent";
import './Dashboard.css'

export const Dashboard = ({ fetchAllOutfits, outfits }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      fetchAllOutfits().then(() => setIsLoaded(true))
  }, [])

  if(!isLoaded){
    return null;
  }

  return (
    <div className="dashboard">
      <h1>Trending</h1>
      <SliderComponent items={outfits} />
      <h1>Friends</h1>
      <SliderComponent items={outfits} />
    </div>
  );
}
