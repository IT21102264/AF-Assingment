import { PageHeader } from "../components/Banner";
import DisplayProduct from "../components/DisplayProduct";
import Header from "../components/Header";

export default function ShopPage() {
  return (
    <div>
      <Header />
      <PageHeader />
      <DisplayProduct />
    </div>
  );
}