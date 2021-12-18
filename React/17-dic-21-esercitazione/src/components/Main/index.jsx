import { useEffect, useReducer } from 'react';
import { http } from './../../lib/http.js'
import { RenderData } from './../RenderData';
import styles from './Main.module.scss';


const INIT_STATE = {
    buttonAdd: 'aggiungi',
    buttonReset: 'reset',
    dataList: [],
}

const newData = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            state.dataList.push(...newData);
            newData.length = 0;
            return { ...state };
        case 'reset':
            return { ...state, dataList: [] };
        default:
            return state;
    }
}

const Main = () => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const pushFunction = (dispatchType) => {
        http().then((data) => { newData.push(data) })
            .then(() => { dispatch({ type: dispatchType }) })
    }

    useEffect(() => {
        pushFunction('add');
    }, []);

    return (

        <div className={styles.main}>
            <div className={styles.buttonWrapper}>
                <button onClick={() => pushFunction('add')} className={styles.button}>{state.buttonAdd}</button>
                <button onClick={() => dispatch({ type: 'reset' })} className={styles.button}>{state.buttonReset}</button>
            </div>

            {state.dataList.map((item, index) => (
                <RenderData key={index} text={item.text} url={item.permalink} num={index + 1} />
            ))}
        </div>
    )

}

export default Main;