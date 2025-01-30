import resCardData from "./utils/mockData";
import RestaurantMenu from "./Components/RestaurantMenu";
const RestaurantMenuBody =()=>{
   
return(
   <div>
   {resCardData.map((restaurant)=>{
      return( <RestaurantMenu resMenu = {restaurant}/>)
   })}
   </div>
  
)
}
export default RestaurantMenuBody;