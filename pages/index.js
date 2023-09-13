import Navbar from "@/app/components/navbar/Navbar";
import Home from "@/app/components/home/Home";
import Footer from "@/app/components/footer/Footer";
import { Provider } from 'react-redux'
import { store } from "../app/store";

export default function Index() {
    return (
      <>
      <Provider store={store}>
      <Navbar />
        <Home />
        <Footer/>

      </Provider>
       
      </>
    );
  }