import Home from "./home";
import TentangKami from "./tentang";
import Sekbid from "./sekbid";
import PengurusHarian from "./pengurus";
import Produk from "./produk";
import BlogTerbaru from "./blogterbaru";

const Beranda = () => {
  return (
    <>
      <Home />
      <TentangKami />
      <Sekbid />
      <PengurusHarian />
      <Produk />
      <BlogTerbaru />
    </>
  );
}

export default Beranda;