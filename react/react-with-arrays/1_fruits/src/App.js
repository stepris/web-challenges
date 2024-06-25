import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: "1", name: "🍎 Apple", category: "", color: "red" },
    { id: "2", name: "🍌 Banana", color: "yellow" },
    { id: "3", name: "🍇 Grape", color: "purple" },
    { id: "4", name: "🍊 Orange", color: "orange" },
    { id: "5", name: "🍋 Lemon", color: "yellow" },
    { id: "6", name: "🥝 Kiwi", color: "green" },
    { id: "7", name: "🫐 Blueberry", color: "blue" },
    { id: "8", name: "🍓 Strawberry", color: "red" },
    { id: "9", name: "🍍 Pineapple", color: "brown" },
    { id: "10", name: "🍉 Watermelon", color: "green" },
  ];

  const numberToString = 12;
  console.log(typeof numberToString);
  console.log(typeof numberToString.toString());

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card name={fruit.name} key={fruit.id} color={fruit.color} />
      ))}
    </div>
  );
}
