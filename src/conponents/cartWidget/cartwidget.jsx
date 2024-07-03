import { useContext } from 'react'
import { Badge, Avatar } from 'antd';
import { ShopContext } from '../../context/shopContext'

const Cartwidget = () => {

    const { cantidad } = useContext(ShopContext)

    return (
    <>
        <Badge count={cantidad}>
        <Avatar shape="square" size="large" style={{ backgroundColor: 'yellowgreen' }}/>
        </Badge>
    </>
    )
}

export default Cartwidget
