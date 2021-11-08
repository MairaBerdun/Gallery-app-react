import React, { useCallback, useEffect, useState } from 'react';
import Card from './Card';
import Form from './Form';
import Loading from './Loading';

const Cards = () => {

    const [images, setImages] = useState([]);
    const [input, setinput] = useState("");
    const [loading, setLoading] = useState(true);

    const peticion = useCallback(async () => {

        const key = "client_id=NOoRQHvBlJ9hBrlo8XERKTXMqFkaleT68a2-nm9KRXU"
        let ruta = `https://api.unsplash.com/photos/?${key}`;

        if (input !== "") {
            ruta = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`;
        }

        setLoading(true);

        const res = await fetch(ruta);
        const data = await res.json();

        if (data.results) {
            setImages(data.results)
        } else {
            setImages(data);
        }

        setLoading(false);
    }, [input]);


    useEffect(() => {

        peticion();

    }, [input, peticion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value;

        setinput(text);
    }

    return (
        <div className="text-center">
            <Form handleSubmit={handleSubmit}/>
            <hr></hr>
            {loading && <Loading />}
            <div className="row">
                {
                    images.map((img) => {
                        return <div key={img.id} className="col">
                            <Card img={img.urls.small} />
                        </div>

                    })
                }
            </div>


        </div>
    )
}

export default Cards
