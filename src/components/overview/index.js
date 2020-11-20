import PropTypes from 'prop-types';
import Progressbar from '../progressbar';
import Container from './style';
import Colors from '../../utils/colors';

const Overview = (props) => {
    const {imageBackground, color, title, width} = props;
    return (
        <Container imageBackground={imageBackground} color={color}>
                <div className="row"> 
                     <h2 className="title">{title}</h2>
                     <span>Total <p>35</p></span>
                </div>
                <div className="row">
                    <span>Achieved Targets <p>15</p></span>
                     <span>Targets Left <p>10</p></span>
                </div>
                <Progressbar color={Colors.success} width={width} />
                <div className="row">
                    <span>{`${width}% completed`}</span>
                     <span>{`${100 - width}% left`}</span>
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
