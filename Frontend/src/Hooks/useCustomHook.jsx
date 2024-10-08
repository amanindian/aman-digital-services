import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../Context/StateProvider';

export default function useCustomHook() {
    const { setProductQuickView } = useContext(StateContext)
    const navigate = useNavigate();
    const showProduct = (productParam) => {
        navigate(`/product/${productParam}`);
    };

    const handleProductQuickView = (targetId) => {
        setProductQuickView({
            condition: true,
            targetId: targetId
        })
    };

    

    return [
        showProduct,
        handleProductQuickView,
    ];
}
