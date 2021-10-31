import React, { Fragment, useState } from 'react';
import { Addcategory } from './components/Addcategory';
import { GifGrid } from './components/GifGrid';

const App = () => {

    const [categories, setCategories] = useState([ ])

    return (
        <Fragment>
            <h2>Gift Expert</h2>
            <Addcategory setCategories={setCategories} categories={categories}/>
            <hr />

                {
                    categories.map((category) => {
                       return  <GifGrid key={category} category={category} />
                    })
                }
        </Fragment>
    )
}

export default App;