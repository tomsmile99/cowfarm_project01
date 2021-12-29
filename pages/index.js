import MainLayout from '../src/components/layouts/MainLayout';
import BannerSlide from '../src/components/inHome/BannerSlide';
import ImageGallery from 'react-image-gallery';


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


export default function Home({}) {
  return (
    <MainLayout 
      pageTitle="รับซื้อวัว ขายวัว น้ำเชื้อวัวพันธ์" 
      description="ผลงานของ........"
      KeyWords="รับซื้อวัว,ขายวัว,น้ำเชื้อวัวพันธ์"
    >
    <BannerSlide></BannerSlide>
    {/* Content */}
    <div className ="container p-3">
      <div className ="row">
        <div className ="col-md-12">
          <h1>รับซื้อ-ขายวัวพันธ์นแท้</h1>
        </div>
      </div>
      <div className ="row">
        <div className ="col-md-3 text-center">
          Box 1
        </div>
        <div className ="col-md-3 text-center">
          Box 2
        </div>
        <div className ="col-md-3 text-center">
          Box 3
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-6">
          <ImageGallery items={images} thumbnailPosition="left" showPlayButton={false} showNav={true} />
        </div>
      </div>
    </div>{/*div container */}

    </MainLayout>
  )
}
