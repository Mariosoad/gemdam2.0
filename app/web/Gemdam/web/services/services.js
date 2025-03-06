import './services.css';

export default function Services(props){

    const dataServices = props.dataText;

    const handleClickScroll = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

return(
    <div className="container-services snapScroll">
            <div className='back-tittle'><h2>{dataServices.title}</h2></div>
            <div className='child-container-services'>
                <div className='subtittle-top top-position mark-tittle'>
                    <div className='sep-line-large'></div>
                    <p>{dataServices.subtitle}</p>
                </div>
                <h2 className='tittle-section'>{dataServices.titleDescription}</h2>
                <div className='child_separate_description'></div>
                <div className='container-description'>
                    {dataServices.description.map((item, index) => {
                        return (
                            <div key={index} className='description service_item'>
                                <div>
                                    <p className='number'>{item.number}</p>
                                    <div className='sep-line-short'></div>
                                    <h4 className='tittle-description'>{item.title}</h4>
                                    <div className='text-description services_dot'>  
                                        {item.text.split("\n").map((line, i) => (
                                                <div className='child_service_dot' key={i}>
                                                    <li className='dot_square'></li>
                                                    <span>
                                                    {line}
                                                    </span>
                                                </div>
                                        ))}
                                   </div>
                                </div>
                                <button className="service_link" onClick={(e) => handleClickScroll("contact")}>{dataServices.link}</button>
                            </div>
                        )
                    })}
                </div>
            </div>

        <div className='lines'>
                <div className='line-1'></div>
                <div className='line-1'></div>
                <div className='line-1'></div>
                <div className='line-1'></div>
                <div className='line-1'></div>
            </div>
    </div>
)

}