import MainLayout from '../src/components/layouts/MainLayout';
import Image from 'next/image'

export default function Home({}) {
  return (
    <MainLayout 
      pageTitle="รับซื้อวัว ขายวัว น้ำเชื้อวัวพันธ์" 
      description="ผลงานของ........"
      KeyWords="รับซื้อวัว,ขายวัว,น้ำเชื้อวัวพันธ์"
    >
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src="/images/bannerTest_img1.jpg" width={3840} height={1391} className="d-block w-100" alt="..."/>
              {/* <Image src="https://saksiam.com/images/bannerSlide/2021-12-14nogift65.jpg" 
              width={3840}
              height={1191} 
              className="d-block w-100" 
              alt="..." /> */}
            </div>
            <div className="carousel-item">
              <Image src="/images/bannerTest_img2.jpg" width={3840} height={1391} className="d-block w-100" alt="..."/>
              {/* <Image src="https://saksiam.com/images/bannerSlide/2021-04-30Banner_car300464.jpg" 
              width={3840}
              height={1191} 
              className="d-block w-100" 
              alt="..." /> */}
            </div>
            <div className="carousel-item">
              <Image src="/images/bannerTest_img3.jpg" width={3840} height={1391} className="d-block w-100" alt="..."/>
              {/* <Image src="https://saksiam.com/images/bannerSlide/2021-04-30Banner_agriculture300464.jpg" 
              width={3840}
              height={1191} 
              className="d-block w-100" 
              alt="..." /> */}
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </MainLayout>
  )
}
