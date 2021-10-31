import React, {Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({ category }) => {

    const {loading, data:images} = useFetchGifs(category);
    // const [images, setImages] = useState([]);
    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn" key={category}>{category}</h3>
            {loading && <p className="animate__animated animate__flash" >Loading...</p>}
            <div className="card-grid">
                <ol>
                    {
                        images.map((img) => {
                            return <GifGridItem key={img.id} img={img} />
                        })
                    }
                </ol>
            </div>
        </Fragment>
    )
}
