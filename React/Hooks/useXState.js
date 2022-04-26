import { useState } from "react";
import uuid from "uuid/v4";
export default initialX => {
  const [X, setX] = useState(initialX);
  return {
    X,
    addX: newXText => {
      setX([...X, { id: uuid(), task: newXText, completed: false }]);
    },
    removeX: XId => {
      //filter out removed X
      const updatedX = X.filter(X => X.id !== XId);
      //call setX with new X array
      setX(updatedX);
    },
    toggleX: XId => {
      const updatedX = X.map(X =>
        X.id === XId ? { ...X, completed: !X.completed } : X
      );
      setX(updatedX);
    },
    editX: (XId, newTask) => {
      const updatedX = X.map(X =>
        X.id === XId ? { ...X, task: newTask } : X
      );
      setX(updatedX);
    }
  };
};
