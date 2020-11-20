import PropTypes from 'prop-types';
import {Container, Heading} from './style';
import Progressbar from '../progressbar';
import mapPinIcon from '../../assets/map-pin.svg'
import Colors from '../../utils/colors';

const Target = ({ color, target }) => {
    const { description, achieved, location, monthTarget, leftToGo, dailyTarget, progressStatus  } = target;
    const {progress, black} = Colors;
    const progressBarColor = color===progress? black: color;

    return (
        <Container color={color}>
            <Heading>
                <span>{description}</span>
                <span className="location"><i><img src={mapPinIcon} /></i>{location}</span>
            </Heading>
            <div className="card-body">
                <span>Month Target <p>{monthTarget}</p></span>
                <span>Achieved <p>{achieved}</p></span>
                <span>Left to go<p>{leftToGo}</p></span>
                <span>Daily Target<p>{dailyTarget}</p></span>
            </div>
            <div className="progressbar-section">
                <Progressbar color={progressBarColor} width={progressStatus} />
            </div>
            <div className="card-footer">
                <span>{`${progressStatus && progressStatus}% completed`}</span>
                <span>{`${progressStatus && 100 - progressStatus}% left`}</span>
            </div>
        </Container>
    )
}

Progressbar.propTypes = {
    color:PropTypes.string,
    Target:PropTypes.object
}

export default Target;
