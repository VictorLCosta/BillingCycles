interface IntrinsicAtributtes {
    test: boolean,
    children: any
}

const If = (props: IntrinsicAtributtes) => {
    if(props.test) {
        return (
            <>
                {props.children}
            </>
        )
    } else {
        return null
    }
}

export default If