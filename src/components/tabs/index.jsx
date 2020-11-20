import {useState} from 'react';
import Container from './styled';

const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(children[1].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    }

    return(
        <Container>
            <ul className="tabs">
                {children.map((tab, index)=>{
                    const {label} = tab.props;
                    return(
                        <li className={label === activeTab? 'active':''} key={index}>
                            <a href="#" onClick={(e)=>handleClick(e, label)}>{label}</a>
                        </li>
                    )
                })}
            </ul>
             {children.map((tabContent, index)=>
                {
                    const {label} = tabContent.props;
                    console.log(index)
                    if(label === activeTab)
                    return(
                        <div className="tab-body" key={index}>
                            {tabContent.props.children}
                        </div>
                    )
                }
            )}
            
        </Container>
    )
}

export default Tabs;
