/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import HeroImg from 'assets/hero-img.jpg';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function Banner() {
  return (
    <>
      <div sx={{ height: '70px' }}></div>
      <ParallaxBanner
        sx={styles.banner}
        id="home"
        layers={[{ image: HeroImg, speed: -25, scale: [1.5, 0.5, 'easeInOut'] }]}></ParallaxBanner>
    </>
  );
}

const styles = {
  banner: {
    aspectRatio: '2 /1',
    backgroundColor: '#ededed',
    paddingTop: '100px',
  },
};
