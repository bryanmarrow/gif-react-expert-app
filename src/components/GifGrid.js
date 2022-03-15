import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([])

    // useEffect( () => {
    //     getGifs(category)
    //     .then(setimages)
    // }, [category ])
    

    const { data:images ,loading } = useFetchGifs(category);
    // console.log(state)

    



  return (
    <>
    <h3>{ category }</h3>
    { loading && <p>Loading</p> }
    <div className='card-grid'>        
            {
                images.map( img => (
                    // <li key={img.id }>{ img.title }</li>
                    <GifGridItem 
                        key={ img.id }
                        { ...img } 
                    />
                ))
            }
        
    </div>
    </>
  )
}
