import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    // const categories =  ['One Punche', 'Samurai X', 'Dragon Ball'];

    const [ categories, setCategories ] = useState(['Stevie Wonder'])

    // const handleAdd = () => {
    //     // Primera opción
    //     // setCategories( [...categories, 'Coldplay'] );
    //     // Segunda Opción
    //     setCategories( cats => [...cats, 'Coldplay'] );
    // }

    


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />


            <hr></hr>
            
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => 
                        // <li key={ category }>{ category }</li>
                        <GifGrid 
                            key={category}    
                            category={category}     
                        />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp