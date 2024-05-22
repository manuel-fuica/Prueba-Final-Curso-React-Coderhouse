import React from 'react'
import { Badge, Avatar } from 'antd';

const Cartwidget = () => {
    return (
    <>
        <Badge count={5}>
        <Avatar shape="square" size="large" style={{ backgroundColor: 'yellowgreen' }}/>
        </Badge>
    </>
    )
}

export default Cartwidget
