import {useState} from 'react';
import Target from '../target';
import Container from './style';
import TargetsData from './mockData';
import colors from '../../utils/colors'

const TargetCollection = ()=> {
    const [targets, setTargets] = useState(TargetsData);
    const {success, progress, danger} = colors;

    return(
        <Container> 
            <div className="row">
                {targets.map((target)=>{
                    const {progressStatus} = target;
                    let color = danger;
                    if(progressStatus >= 64) color = progress;
                    if (progressStatus >= 100) color= success;
                    return(
                        <Target color={color} target={target}></Target>
                    );
                })}
           
            </div>
        </Container>
    )
}

export default TargetCollection;
