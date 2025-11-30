function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={`${fruit}-${index}`}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList;
