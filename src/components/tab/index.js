
const Tab = ({children, label}) => (
        <div label={label}>
            <h2>{label}</h2>
            <p>{children}</p>
        </div>
    )

export default Tab;
