import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1> Família </h1>
        {/* Passa os filhos da TAG e as propriedades da TAG */}
        { childrenWithProps(props.children, props) }
    </div>
)