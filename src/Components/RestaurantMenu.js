const RestaurantMenu = (props)=>{
        const {resMenu}= props;
    return (
        <div>
            <h1>Restaurant Name</h1>
            <h3>{resMenu.cuisine}</h3>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}


export default RestaurantMenu;