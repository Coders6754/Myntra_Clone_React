import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";

const Bag = () => {
  const item = {
    id: "002",
    image: "images/2.jpg",
    company: "CUKOO",
    item_name: "Women Padded Halter Neck Swimming Dress",
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.3,
      count: 24,
    },
  };

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagItem item={item} />
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
