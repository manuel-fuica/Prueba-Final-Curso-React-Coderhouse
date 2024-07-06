import { useContext } from 'react'
import { Badge, Avatar } from 'antd';
import { ShopContext } from '../../context/shopContext'
import { Link } from 'react-router-dom'
import { BsCartCheck } from "react-icons/bs";


const Cartwidget = () => {

    const { cantidad } = useContext(ShopContext)

    return (
    <>
        <Badge count={cantidad}>
            <Link to="/cart">
                <BsCartCheck style={{ color: 'greenyellow', fontSize: '35px'}}/>
            </Link>
        </Badge>
    </>
    )
}

export default Cartwidget
