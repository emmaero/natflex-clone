import { Link } from "react-router-dom";
import TitleForm from "../components/admin/TitleForm";
import NavPageSignUp from "../components/NavPageSignUp";
import { iTitle } from "../interfaces/iTitle";
import { createDocument } from "../scripts/firestore";

export default function AddTitlePage() {
  async function onAdd(titleInfo: iTitle) {
    titleInfo.id = await createDocument("title", titleInfo);
    alert("Title added");
  }
  return (
    <>
      <NavPageSignUp />
      <Link to="/serie">
        <button className="button-main">Add Episodes</button>
      </Link>
      <TitleForm onAdd={onAdd} />
    </>
  );
}
