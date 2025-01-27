const trackingButtonComponent = (Component)=>{
    return(props)=>{
        console.log("HoC Tracking Comp");
        const handleClick = ()=>{
            console.log("Logged in fetched",prop.trackingInfo);
        return(
            <div>
            <h1>This is high order component</h1>
            <Component {...props} />
            </div>
        )

    }
}
export default trackingButtonComponent;