import PropTypes from 'prop-types';
import Container from './style';

const Overview = ({imageBackground, color, title}) => {
    return (
        <Container imageBackground={imageBackground} color={color}>
                <div> 
                     <h2 className="title">{title}</h2>
                </div>
                <div>
                <div> <br /></div>
                    <div><br /></div>
                </div>
        </Container>
    )
}

Overview.propTypes = {
    imageBackground:PropTypes.string,
    color:PropTypes.string,
    title:PropTypes.string
}

export default Overview;
