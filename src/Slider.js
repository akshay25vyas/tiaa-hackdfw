import {useState} from "react";
import ReactSlider from "react-slider";

const Slider = () => {
    const [currentValue, setCurrentValue] = useState(50);

    return (
        <div>
            <div class="d-flex flex-column">
                <div>
                    <ReactSlider
                        className="customSlider"
                        thumbClassName="customSlider-thumb"
                        trackClassName="customSlider-track"
                        markClassName="customSlider-mark"
                        marks={20}
                        min={0}
                        max={100}
                        defaultValue={0}
                        value={currentValue}
                        onChange={(value) => setCurrentValue(value)}
                        renderMark={(props) => {
                            if (props.key < currentValue) {
                                props.className = "customSlider-mark customSlider-mark-before";
                            } else if (props.key === currentValue) {
                                props.className = "customSlider-mark customSlider-mark-active";
                            }
                            return <span {...props} />;
                        }}
                    />
                </div>
                <div>
                    Saving is {currentValue} %
                </div>
            </div>
            <div className="wrapper">
                <div class="responsive">
                    <div class="gallery">
                        <img
                            src="https://ap.rdcpix.com/9997adc3e8d2db49621b552bb888923fl-m2018355079od-w480_h360_x2.jpg"/>
                    </div>
                    House
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img
                            src="https://ap.rdcpix.com/9997adc3e8d2db49621b552bb888923fl-m2018355079od-w480_h360_x2.jpg"/>
                    </div>
                    Car
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img
                            src="https://ap.rdcpix.com/9997adc3e8d2db49621b552bb888923fl-m2018355079od-w480_h360_x2.jpg"/>
                    </div>
                    Brands
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img
                            src="https://ap.rdcpix.com/9997adc3e8d2db49621b552bb888923fl-m2018355079od-w480_h360_x2.jpg"/>
                    </div>
                    Travel
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img
                            src="https://ap.rdcpix.com/9997adc3e8d2db49621b552bb888923fl-m2018355079od-w480_h360_x2.jpg"/>
                    </div>
                    Restaurants
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img
                            src="https://ap.rdcpix.com/9997adc3e8d2db49621b552bb888923fl-m2018355079od-w480_h360_x2.jpg"/>
                    </div>
                    Extra Savings
                </div>
            </div>
        </div>

    );
};

export default Slider;