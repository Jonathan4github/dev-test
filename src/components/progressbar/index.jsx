import Container from './style'

const Progressbar = ({color, width}) => {

    return (
        <div><Container color={color} width={width}><div></div></Container></div>
    )
}

export default Progressbar;