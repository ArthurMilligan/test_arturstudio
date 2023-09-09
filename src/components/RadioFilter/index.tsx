import React from "react";
import { FC } from "react";
import {Text} from "../../ui";
import s from './radioFilter.module.scss';

interface IRadioFilterProps{
    filterList:IFilterOption[];
    onChange:(val: string)=>void;
    option: string;
}
interface IFilterOption {
    name:string;
    displayedName: string;
}

const RadioFilter:FC<IRadioFilterProps> = ({filterList, onChange, option}) =>{
    const handleChange = (e:React.FormEvent<HTMLInputElement>) =>{
        onChange(e.currentTarget.value);
    }
    return (
        <div className={s.radioFilter}>
            {filterList.map((filter:IFilterOption)=>(
                    <label key={filter.name} className={`${s.radioFilter__label} ${option === filter.name?s.radioFilter__label_active:''}`}>
                        <input className={s.radioFilter__input} type="radio" value={filter.name} 
                                    checked={option === filter.name} 
                                    onChange={handleChange} />
                        <Text>{filter.displayedName}</Text>
                    </label>
                ))}
        </div>
        
    )
}

export default RadioFilter;