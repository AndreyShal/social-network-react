import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {setAppError} from "../../redux/app-reducer";
import React from "react";

class ErrorSnackbar extends React.Component<ErrorSnackbarProps> {
    private timer: NodeJS.Timeout | null;
    constructor(props: ErrorSnackbarProps) {
        super(props);

        this.timer = null
    }

    componentDidUpdate() {
        if (this.props.error) {
            this.timer = setTimeout(()=>this.props.setAppError(null),3000)
        } else {
            if (this.timer) {
                clearTimeout(this.timer);
                console.log("cleared");
            }
        }
    }


    render() {
        return (
            <>
                {this.props.error && <div style={{position: "fixed", bottom: "20px",color: "red", border: this.props.error ? "1px solid red" : "", padding: "5px"}}>
                    {this.props.error}
                </div>}
            </>
        )
    }


}

const MapDispatchToProps: MapDispatchToProps = {
    setAppError,
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        error: state.app.error
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ErrorSnackbar)

//types
type ErrorSnackbarProps = MapDispatchToProps & MapStateToProps

type MapDispatchToProps = {
    setAppError: (error: string | null) => void
}

type  MapStateToProps = {
    error: string | null
}