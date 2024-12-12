import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import './HomePage.css';  // Importuj plik CSS

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src="/images/hero1.jpg" alt="hero" className="hero-image" />
                </div>
                <div>
                    <img src="/images/hero2.jpg" alt="hero" className="hero-image" />
                </div>
                <div>
                    <img src="/images/hero3.jpg" alt="hero" className="hero-image" />
                </div>
            </Slider>
            <Box display='flex' justifyContent='center' className="welcome-box">
                <Typography variant='h2'><strong>Welcome to the Ski-Store!</strong></Typography>
            </Box>
        </>
    )
}
