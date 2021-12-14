
import styles from './AddVAT.module.scss';


const AddVAT = (props) => {
    const result = (props.value * props.vat / 100) + props.value;
    return (
        <div className={styles.vatWrapper}>
            <p>INPUT: {props.value}</p>
            <p>VAT: {props.vat}%</p>
            <p>RESULT: {result}</p>
        </div>
    )
}

export default AddVAT;