import ImageGallery from 'react-image-gallery';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

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
const ContentBox1 = () => {
    return (
        <div className ="container p-3">
            <div className ="row">
                <div className ="col-md-12">
                <h1>บริการของเรา</h1>
                </div>
            </div>
            <div className ="row">
                <OwlCarousel 
                className='owl-theme' 
                loop margin={10} 
                items={4}
                nav ={false}
                >
                <div className="item">
                    <div className="col-md-12 text-center shadow mb-4">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="col-md-12 text-center shadow mb-4">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="col-md-12 text-center shadow mb-4">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="col-md-12 text-center shadow mb-4">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="col-md-12 text-center shadow mb-4">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="col-md-12 text-center shadow mb-4">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="col-md-12 text-center shadow mb-4">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </OwlCarousel>
            </div>
            <div className = "row mt-4">
                <div className = "col-md-6">
                <ImageGallery items={images} thumbnailPosition="left" showPlayButton={false} showNav={true} />
                </div>
            </div>
        </div>
        
    )
}

export default ContentBox1
