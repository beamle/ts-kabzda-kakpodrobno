import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledONOFF from "./components/ONOFF/UncontrolledONOFF";
import UncotrolledAccordion from "./components/UncontrolledAccordion/UncotrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/ONOFF/OnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [lightStatus, setLightStatus] = useState<boolean>(false);
    return (
        <div className="App">
            <Accordion title={"Accordion title"} collapsed={collapsed} onClick={setCollapsed}
                       items={[{title: 'Banan', value: 1},{title: 'Orange', value: 2}, {title: 'Strawberries', value: 33}]} onClickSelect={()=>{}}/>
            <UncotrolledAccordion title={"UncontrolledAccordion"}/>
            {/*<Rating ratingValue={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<OnOff lightStatus={lightStatus} setLightStatus={setLightStatus}/>PRevious Controlled*/}
            {/*<UncontrolledONOFF/> {lightStatus.toString()}*/}

        </div>
    );
}

export default App;
