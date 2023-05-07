import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ItemMapper } from "../../components/ItemMappers";
import { PageHeader } from "../../components/Banner";

export default function Product() {
  return (
    <div>
      <Header />
      <PageHeader />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h2>Products</h2>
        <p>Discover a wide range of products</p>
      </div>
      <ItemMapper />
      <Footer />
    </div>
  );
}
