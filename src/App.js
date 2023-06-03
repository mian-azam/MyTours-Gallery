//  -----------------importing components:
import Header from "./appComponents/Header";
import Banner from "./appComponents/Banner";
import Gallery from "./appComponents/Gallery";
import Footer from "./appComponents/Footer";
//----------------------------------------


function App() {
  const images = [
    {
      id: 1,
      url: process.env.PUBLIC_URL + '/One.jpeg'
    },
    {
      id: 2,
      url: process.env.PUBLIC_URL + '/Two.jpeg'
    },
    {
      id: 3,
      url: process.env.PUBLIC_URL + '/Three.jpeg'
    },
    {
      id: 4,
      url: process.env.PUBLIC_URL + '/Four.jpeg'
    }

  ]
  return (
    <main>
      <Header />
      <Banner
        heading='"Nature is God and God is Nature"'
        para={'Traveling allows us to witness the vastness of our planet, unveiling new landscapes' +
          'and cultures that enrich our understanding of the world. In the embrace of nature, we find' +
          'solace, inspiration, and a deep appreciation for the intricate wonders that exist beyond our everyday' +
          'lives. It is through this love affair with nature and travel that we embark on a lifelong journey of' +
          'exploration and self-discovery, forever captivated by the magnificence that surrounds us.'}
      />
      <Gallery
        images={images} />
      <Footer />

    </main>
  );
}

export default App;
