import React, { useContext } from 'react'
import Context from './context'

const TodoItem = (props) => {
    const styles = {
        li: {
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            margin: 0,
            marginTop: '5px',
        },
        span: {
            display: 'flex',
            alignItems: 'center'
 
        },
        p: {
            margin: 0,
            marginBottom: '5px',
            marginLeft: '10px',
        },
    }

    let classes =[];
    props.item.completed && classes.push('done');

    let {changeCompletedStatus} = useContext(Context);
    let {onButtonClick} = useContext(Context);

    return(
        <li style={styles.li}>
            <span style={styles.span}>
                <input type="checkbox" checked={props.item.completed} onChange={changeCompletedStatus.bind(null, props.item.id)}/>
                <p style={styles.p} className={classes.join(' ')}><strong>{props.idx + 1}</strong>&nbsp;{props.item.title}</p>
            </span>
            <button onClick={onButtonClick.bind(null, props.item.id)}>&times;</button>
        </li>
    );
}

export default TodoItem;