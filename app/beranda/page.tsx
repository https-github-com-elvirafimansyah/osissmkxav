import Home from "./home";
import TentangKami from "./tentang";
import Sekbid from "../sekbid/page";
import PengurusHarian from "./pengurus";
import Produk from "./produk";
import BlogTerbaru from "./blogterbaru";
import Motto from './motto';

const Beranda = () => {
  return (
    <>
      <Home />
      <TentangKami />
      <PengurusHarian />
      <Sekbid />
      <Produk />
      <BlogTerbaru />
      <Motto />
    </>
  );
}

export default Beranda;