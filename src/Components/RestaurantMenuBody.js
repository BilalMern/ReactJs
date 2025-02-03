// import resCardData from "../utils/mockData";
// import RestaurantMenu from "./RestaurantMenu";
// const RestaurantMenuBody =()=>{
   
// return(
//    <div>
//       {/* {resCardData.forEach((restaurant) => {
//   console.log(restaurant.id); // This should print a unique, defined id for each restaurant */}
// {/* })}; */}
//    {resCardData.map((restaurant)=>{
//       return(  <RestaurantMenu resMenu = {restaurant} key={restaurant.id}/>)
      
//    })}
//    </div>
  
// )
// }
// export default RestaurantMenuBody;


// import resCardData from "../utils/mockData";
// import RestaurantMenu from "./RestaurantMenu";
// const RestaurantMenuBody =()=>{
   
// return(
//    <div>
//        <RestaurantMenu resMenu = {resCardData.id}/>
//       </div>
  
// )
// }
// export default RestaurantMenuBody;






import { useParams } from "react-router-dom";
import resCardData from "../utils/mockData";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantMenuBody = () => {
  const { resId } = useParams(); // Get restaurant ID from URL

  // Find the restaurant based on resId
  const restaurant = resCardData.find((res) => res.id === resId);

  if (!restaurant) {
    return <h2>Restaurant not found!</h2>;
  }

  return (
    <div>
      <RestaurantMenu resMenu={restaurant} />
    </div>
  );
};

export default RestaurantMenuBody;