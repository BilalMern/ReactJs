// const RestaurantMenu = (props)=>{
//         const {resMenu}= props;
//     return (
//         <div>
//             <h1>Restaurant Name</h1>
//             <h3>{resMenu.cuisine}</h3>
//         </div>
//     )
// }


// export default RestaurantMenu;





const RestaurantMenu = ({ resMenu }) => {
    return (
      <div>
        <h1>Restaurant Menu</h1>
        <h2>{resMenu.cuisine}</h2>
        <img src={resMenu.img} alt={resMenu.cuisine} style={{ width: "300px" }} />
        <p>Rating: {resMenu.rating}</p>
        <p>Delivery Time: {resMenu.delivery}</p>
        <p>Price: {resMenu.price}</p>
      </div>
    );
  };
  
  export default RestaurantMenu;
  