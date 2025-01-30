let RestaurantCard = (props) => {
    const {resData} =props
    // const { img,cuisine,price,delivery,rating } = props;
    //! Some developers instead of writing props here they destructure on the fly means: let RestaurantCard = ({img,cuisine,rating,delivery,price}) => { --> now below we dont need to write {props.img}, {props.cuisine},{props.price} etc we just need to write {img},{cuisine},{price}. This destructuring on the fly is same as const  RestaurantCard = (props) => { const {img,price,delivery,cuisine}=props___}
    return (
      <div className="res-card">
        <img className="card-img" src={resData.img} />
        <h3>
          <span className="lorems">Lorem</span> Ipsum
        </h3>
        <h6 className="cousine">{resData.cuisine}</h6>
        <div className="details">
          <h6 className="rating">
            <i className="bi bi-star-fill"></i> {resData.rating}
          </h6>
          <h6 className="delivery">{resData.delivery}</h6>
          <h6 className="price">{resData.price}</h6>
        </div>
      </div>
    );
  };

  export default RestaurantCard;