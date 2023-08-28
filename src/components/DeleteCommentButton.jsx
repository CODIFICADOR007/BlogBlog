// DeleteCommentButton.jsx
import React from "react";

export default function DeleteCommentButton({ onDelete }) {
  const handleDelete = () => {
    // Implement the delete functionality here
    onDelete();
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
}
