import FirstHome from '../../components/FirstHome'
import Footer from '../../components/Footer'
import SecondHome from '../../components/SecondHome'
import ScrollToTop from "react-scroll-to-top";
import { TbArrowBigUpLines } from "react-icons/tb";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
		document.title = `Site do Valentin`

  }, [])
  return (
    <>
    <FirstHome/>
    <SecondHome/>
    <Footer/>
    
    <ScrollToTop
						smooth
            id='scrollToTop'
						component={<TbArrowBigUpLines size={30} />}
						style={{
              border: '2px solid black',
							width: "60px",
							height: "60px",
							borderRadius: "100%",
							bottom: "20px",
							right: "20px"
						}}
            
					/>
    </>
  )
}
