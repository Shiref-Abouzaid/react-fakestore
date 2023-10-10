import './index.scss';
import { Card, Button } from 'react-bootstrap';
import { useNavigate   } from 'react-router-dom';
import { useCart } from '~/contexts/CartContext';
import { useWishlist } from '~/contexts/WishlistContext';
const Product = ({ product, isInCart, isInWishlist }) => {
    const { addToCart,removeFromCart } = useCart();
    const {addToWishlist, removeFromWishlist} = useWishlist();


    const maxLength = 100;
    const navigate = useNavigate();
    const inCart = isInCart(product.id);
    const inWishlist = isInWishlist(product.id);

    // Truncate the description if it exceeds maxLength
    const truncatedDescription = product.description.length > maxLength
        ? product.description.substring(0, maxLength - 3) + "..."
        : product.description;

        const handleAddToCartClick = ($e) => {
        
            $e.stopPropagation();
            addToCart(product);
    
        }

        const handleCardClick = () => {
            navigate(`product/${product.id}`);
        };

        const handleRemoveFromCartClick = ($e) => {
            $e.stopPropagation();
            removeFromCart(product.id)
        }

        const handleAddToWishList = ($e)=>{
            $e.stopPropagation();
            addToWishlist(product);
            //setIsLiked(!isLiked);
        }

        const handleRemoveFromWishList = ($e)=>{
            $e.stopPropagation();
            removeFromWishlist(product.id);
        }


    
    return (
        <div onClick={handleCardClick} className='productLink' >
            <Card className="product">
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body className="product-content">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {truncatedDescription}
                    </Card.Text>
                    <Card.Text>
                        Price: ${product.price}
                    </Card.Text>
                    <div className='button-container'>
                        {inCart ? <Button variant="danger" onClick={($e)=>handleRemoveFromCartClick($e)}>Remove from Cart</Button> : <Button variant="primary" onClick={($e)=>{handleAddToCartClick($e)}} className="addToCart">Add to Cart</Button>}
                        
                        {inWishlist ? <Button variant="default" className="addToWishlist" onClick={($e)=>handleRemoveFromWishList($e)}><div className='m-0 h1'>❤️</div></Button> : <Button variant="default" className="addToWishlist" onClick={($e)=>handleAddToWishList($e)}><div className='m-0 h1'>♡</div></Button>}
     
                    </div>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Product;