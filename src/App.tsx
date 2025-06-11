import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "Sanfransisco", "Delhi", "Mumbai"];
  let handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
