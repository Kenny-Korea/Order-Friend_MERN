export interface MenuType {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: "Breakfast" | "Lunch" | "Dinner" | "All day" | "Beverage" | "Sides";
  onDiscount: boolean;
  image: string[];
}
