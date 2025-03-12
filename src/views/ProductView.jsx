import { useParams } from "react-router-dom";

const ProductView = () => {
    const { id } = useParams();

    return (  
        <div className="m-20 bg-white rounded">
            <h1>Blog details - { id }</h1>
        </div>
    );
}
 
export default ProductView;