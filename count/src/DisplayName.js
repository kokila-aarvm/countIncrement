import { useEffect } from "react";

const list = [
  {
    id: "1",
    Name: "kokila",
  },
  {
    id: "2",
    Name: "aarvm",
  },
  {
    id: "3",
    Name: "solutions",
  },
  {
    id: "4",
    Name: "intern",
  },
  {
    id: "5",
    Name: "Numentica",
  },
];
function DisplayName(props) {
  const itemName = list.find((item) => Number(item.id) === props.count);
  useEffect(() => {
    return () => {
      console.log(" i am unmounted ");
    };
  }, []);
  if (itemName) {
    return <h1>{itemName.Name}</h1>;
  }
  return <h1>"User not found!!"</h1>;
}

export default DisplayName;
