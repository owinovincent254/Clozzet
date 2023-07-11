import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import undraw from "../assets/images/undraw.svg";
function NotFound() {
  return (
    <div className="h-[100vh] flex flex-col">
      <Nav className="flex-1"/>
      <main className="  bg-[url('assets/images/undraw.svg')] bg-no-repeat bg-contain bg-center flex-1"></main>

      <Footer className="flex-1" />
    </div>
  );
}
export default NotFound;
