import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../firebaseConfig";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { confirmAlert } from "react-confirm-alert"; // Import react-confirm-alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import the CSS for the dialog

export default function DeleteArticle({ id, imageUrl }) {
  const handleDelete = async () => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this article?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await deleteDoc(doc(db, "Articles", id));
              toast("Article deleted successfully", { type: "success" });
              const storageRef = ref(storage, imageUrl);
              await deleteObject(storageRef);
            } catch (error) {
              toast("Error deleting article", { type: "error" });
              console.log(error);
            }
          },
        },
        {
          label: "No",
          onClick: () => {
            // Do nothing if "No" is clicked
          },
        },
      ],
    });
  };

  return (
    <div>
      <i
        className="fa fa-times"
        onClick={handleDelete}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
