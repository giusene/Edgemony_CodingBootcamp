import { useEffect, useReducer } from 'react';
import { http } from './../../lib/http.js'
import { RenderData } from './../RenderData';
import styles from './Main.module.scss';


const INIT_STATE = {
    buttonAdd: 'aggiungi',
    buttonReset: 'reset',
    dataList: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'init':
            http().then((data) => { state.dataList = [data] })
            return {...state}
        case 'add':
            http().then((data) => { state.dataList.push(data) });
            console.log(state.dataList)
            return {...state};
        case 'reset':
            return {...state, dataList: [] };
        default:
            return state;
    }
}

const Main = () => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    useEffect(() => {
        dispatch({ type: 'init' })
    }, []);

    return (
        
        <div className={styles.main}>
            <button onClick={() => dispatch({ type: 'add' })} className={styles.button}>{state.buttonAdd}</button>
            <button onClick={() => dispatch({ type: 'reset' })} className={styles.button}>{state.buttonReset}</button>

            {state.dataList.map((item, index) => (
                <RenderData key={index} text={item.text} url={item.permalink} num={index+1} />
            ))}
        </div>
    )

}

export default Main;