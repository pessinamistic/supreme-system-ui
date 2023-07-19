import { MouseEvent, useState } from "react";

//{items: [], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //Hook : This is State Hook we can  tell this hook will store data that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>No Item Found</p>;
  };

  const handleClick = (event: MouseEvent) => console.log(event);
  const handleClick2 = (item: String, index: number) =>
    console.log(item, index);

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
