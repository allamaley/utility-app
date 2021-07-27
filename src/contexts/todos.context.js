import { createContext } from "react";

const TodosContext = createContext([
  {
    id: 1,
    title: "todo test 1",
    createDate: new Date(),
  },
  {
    id: 2,
    title: "todo test 2",
    createDate: new Date(),
  },
]);

export default TodosContext;
