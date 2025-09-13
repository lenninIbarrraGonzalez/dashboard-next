import { CartCounter } from "../../shopping-cart/components/CartCounter";
export const metadata = {
  title: "Counter Page",
  description: "This is the counter page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  );
}
