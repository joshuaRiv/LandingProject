import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import './Carousel.css';

const contentStyle = {
  margin: 0,
  height: '300px',
  color: '#fff',
  // lineHeight: '300px',
  background: 'transparent',
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
};

// const contentSpacing = {
//   marginTop: '50px',
// };

const CarouselComponent = () => (
  <ConfigProvider
    theme={{
      components: {
        Carousel: {
          dotWidth: 10,
          dotHeight: 10,
          dotActiveWidth: 10,
        },
      },
    }}
  >
    <div className="w-screen h-80">
      {/* <Carousel autoplay autoplaySpeed={4000}> */}
      <Carousel dotPosition="top" effect="fade" autoplay autoplaySpeed={1000}>
        <div>
          <div style={contentStyle}>
            <span style={{ fontSize: '1rem' }} className="gradient__text">Lorem ipsum dolor sit amet</span>
            <p>
              Augue eget arcu dictum varius duis at consectetur lorem donec. Malesuada
              proin libero nunc consequat interdum varius sit amet. Duis tristique
              sollicitudin nibh sit. Ullamcorper dignissim cras tincidunt lobortis
              feugiat vivamus at augue eget.
            </p>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <span>PRUEBA 3</span>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3>PRUEBA 3</h3>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3>PRUEBA 4</h3>
          </div>
        </div>
      </Carousel>
    </div>
  </ConfigProvider>
);

export default CarouselComponent;
