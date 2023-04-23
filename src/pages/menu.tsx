import MenuCard from "../components/cards/menuCard";

const DUMMY_MENU: any = [
  {
    name: "Nasi Goreng",
    description: "Indonesian Bokkembap",
    price: 10,
    isAvailable: true,
    category: "Breakfast",
    onDiscount: false,
    image: ["abc"],
  },
];

const Menu = () => {
  return (
    <>
      <div className="Menu">
        {DUMMY_MENU.map((item: any) => (
          <MenuCard item={item} key={item.name} />
        ))}
      </div>
    </>
  );
};

export default Menu;
