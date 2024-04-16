import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../utils/Fetch';
import { useEffect } from 'react';
import Slider from '../components/Slider';


const House = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, loading, error } = useFetch("/logements.json");
    const product = data?.find((element) => element.id === id);

    useEffect(() => {
        if (data && (error || !data.find((element) => element.id === id))) {
          navigate("/error");
        }
      }, [data, error, id, navigate]);
    
      if (loading) return <div>Loading ...</div>;
      if (error || !product) return null;


    return (
        <div>
            <Navigation />
            <div className="product-container">
                <Slider products= {product.pictures}/>

            </div>
            <Footer />
        </div>
    );
};

export default House;