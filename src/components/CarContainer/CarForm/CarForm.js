import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../../services/carService";
import {Context} from "../CarContainer";

const CarForm = () => {
    const {reset, register, handleSubmit} = useForm()
    const [errors, setErrrors] = useState(null)
    const {setTrigger} = useContext(Context)
    const save = async (car) => {
        try {
            await carService.create(car)
            setErrrors(null)
            reset()
            setTrigger()
        } catch (e) {
            setErrrors(e.response.data)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label>brand: <input type="text" placeholder={'brand'} {...register('brand')}/></label>
                <label>price: <input type="text" placeholder={'price'} {...register('price')}/></label>
                <label>year: <input type="text" placeholder={'year'} {...register('year')}/></label>
                <button>save</button>
            </form>
            {errors && <h1>{JSON.stringify(errors)}</h1>}
        </div>
    );
};

export default CarForm;