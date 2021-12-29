import MainLayout from '../src/components/layouts/MainLayout'
import BannerSlide from '../src/components/inHome/BannerSlide'
import ContentBox1 from '../src/components/inHome/ContentBox1'

export default function Home({}) {
  return (
    <MainLayout 
      pageTitle="รับซื้อวัว ขายวัว น้ำเชื้อวัวพันธ์" 
      description="ผลงานของ........"
      KeyWords="รับซื้อวัว,ขายวัว,น้ำเชื้อวัวพันธ์"
    >
    <BannerSlide></BannerSlide>
    {/* Content */}
    <ContentBox1></ContentBox1>
    {/*div container */}

    </MainLayout>
  )
}
