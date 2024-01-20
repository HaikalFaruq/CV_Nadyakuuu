import React,{useState,useEffect} from 'react'
import '../../sass/_experience.scss';
import ExperienceTimeline from "./experienceTimeline";

export const ExperienceView = () => {
    /* Read data from .json file and sent them as props to be displayed in experience section */
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('experience.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className="experience">
            <h2 className={'header-title'}>Experience<span>.</span></h2>
            <div className={'experience-section'}>
                <div className={'learning-box rounded shadow-dark'}>
                    <div>
                        <ExperienceTimeline experience={data.slice(0,3)}/>
                    </div>
                </div>
                <div className={'experience-box rounded shadow-dark'}>
                    <div>
                        <ExperienceTimeline experience={data.slice(3,6)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
