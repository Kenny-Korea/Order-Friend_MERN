const category = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "All day",
  "Beverage",
  "Sides",
];

const Sidebar = () => {
  return (
    <div className="Sidebar">
      {category.map((item) => (
        <div className="categoryList" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
