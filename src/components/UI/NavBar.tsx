import avatar from "../../assets/ai_gen_img.jpg";
import nbLogo from "../../assets/nbLogo.svg";
export default function NavBar() {
  return (
    <nav className="bg-blue-500 flex p-4 justify-between lg:px-12 sticky top-0">
      <div className="flex justify-center items-center gap-1">
        <img src={nbLogo} alt="viteLogo" className="w-4" />
        <div className="font-bold text-white text-xl">NoteBook</div>
      </div>
      <div className=" p-1 rounded-full cursor-pointer w-14">
        <img src={avatar} alt="" className="rounded-full border" />
      </div>
    </nav>
  );
}
