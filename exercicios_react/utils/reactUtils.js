import React from 'react'

{/* Estamos criando um map com os filhos passando para cada filho um clone propriedade do pai com a função spread */}
function childrenWithProps(children, props) {
    return React.Children.map(props.children,
        child => React.cloneElement(child, {...props}))
}

export { childrenWithProps }