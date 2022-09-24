import { useState } from "react";
import ReactSlider from "react-slider";

const Slider = () => {
    const [currentValue, setCurrentValue] = useState(50);

    let houseSrc, carSrc, brandSrc, travelSrc, restaurantSrc, savingSrc;

    if (currentValue >= 35 && currentValue <= 65) {
        houseSrc = "https://ap.rdcpix.com/9997adc3e8d2db49621b552bb888923fl-m2018355079od-w480_h360_x2.jpg";
        carSrc = "https://cars.usnews.com/static/images/Auto/custom/14645/2022_Audi_e-tron_GT_1.jpg";
        brandSrc = "https://static.nike.com/a/images/f_auto/fa253650-9040-44ac-91e9-7b7175f1cc3f/image.jpeg";
        travelSrc = "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AQR4CCH234I6ZM45OEYJC2ABJM.jpg";
        restaurantSrc = "https://www.mustdobrisbane.com/sites/default/files/styles/mdb_article_full/public/my-thai_dsc6392.jpg";
        savingSrc = "https://i.pinimg.com/736x/11/6f/b7/116fb7842c22935f8b20877e5212a150.jpg";
    } else if (currentValue < 35) {
        houseSrc = "https://hips.hearstapps.com/hbu.h-cdn.co/assets/16/23/1465491765-apartment.jpg";
        carSrc = "https://media.ed.edmunds-media.com/toyota/corolla-hybrid/2020/oem/2020_toyota_corolla-hybrid_sedan_le_fq_oem_1_1600.jpg";
        brandSrc = "https://heartsforthehomeless.org/wp-content/uploads/2019/01/1920x1080-blog-post-thrift-store-1024x576.jpg";
        travelSrc = "https://www.amtrak.com/content/dam/projects/dotcom/english/public/images/TextwithImage-Horizontal/RS684__2016_0412_Conductors_-0142.jpg/_jcr_content/renditions/cq5dam.web.506.379.jpeg";
        restaurantSrc = "https://previews.agefotostock.com/previewimage/medibigoff/54ab4813e7df0d9c8674dbca84de0f10/x3h-1380566.jpg";
        savingSrc = "https://www.pngitem.com/pimgs/m/239-2394725_pile-of-cash-bundle-of-money-drawing-hd.png";
    } else {
        houseSrc = "https://foyr.com/learn/wp-content/uploads/2019/03/Villa_Mistral-Singapore.jpg";
        carSrc = "https://di-uploads-pod15.dealerinspire.com/lakeforestsportscars/uploads/2020/12/Ferrari-SF90-Stradale-on-Coastline.jpg";
        brandSrc = "https://williamsonsource.com/wp-content/uploads/2020/01/81839026_6151145840943_6412201605298388992_n.jpg";
        travelSrc = "https://static01.nyt.com/images/2018/01/28/travel/28jets-1/28jets-1-superJumbo.jpg";
        restaurantSrc = "https://media.cntraveler.com/photos/5661d5895e7aeb7a6e21e8f6/master/w_2048,h_1536,c_limit/restaurant-le-meurice-paris-cr-courtesy.jpg";
        savingSrc = "https://img.freepik.com/premium-vector/bundles-money-with-lots-coins-flying-banknotes_110633-413.jpg";
    }

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
                        <img src={houseSrc} />
                        <figcaption>House</figcaption>
                    </div>
                    {/* House */}
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={carSrc} />
                        <figcaption>Car</figcaption>
                    </div>
                    {/* Car */}
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={brandSrc} />
                        <figcaption>Brands</figcaption>
                    </div>
                    {/* Brands */}
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={travelSrc} />
                        <figcaption>Travel</figcaption>
                    </div>
                    {/* Travel */}
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={restaurantSrc} />
                        <figcaption>Restaurants</figcaption>
                    </div>
                    {/* Restaurants */}
                </div>
                <div className="responsive m-t-1">
                    <div className="gallery">
                        <img src={savingSrc} />
                        <figcaption>Extra Savings</figcaption>
                    </div>
                    {/* Extra Savings */}
                </div>
            </div>
        </div>

    );
};

export default Slider;