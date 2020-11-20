import PropTypes from 'prop-types';
import Container from './style'

const Progressbar = ({color, width}) => {

    return (
        <div><Container color={color} width={width}><div></div></Container></div>
    )
}

Progressbar.propTypes = {
    color:PropTypes.string,
    width:PropTypes.number
}

export default Progressbar;