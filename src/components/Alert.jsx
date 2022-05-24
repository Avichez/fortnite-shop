import { useEffect } from "react";

const Alert = (props) => {

    const {name = '', clearAlert = Function.prototype} = props;


    useEffect(() => {
        const timerId = setTimeout(clearAlert, 2000)

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [name])

    return (
        <div id="toast-container">
            <div className="toast">{name} Added</div>
        </div>
    )
}

export {Alert};