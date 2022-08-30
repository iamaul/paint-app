import * as React from "react";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import "./index.less";
import { DispatcherContext } from "../../../context";
import { CLEAR_EVENT, REDO_EVENT, UNDO_EVENT } from "../../../utils/dispatcher/event";

const OtherOperator = () => {
    const dispatcherContext = React.useContext(DispatcherContext);

    const clearCanvas = () => {
        dispatcherContext.dispatcher.dispatch(CLEAR_EVENT);
    };
    const undo = () => {
        dispatcherContext.dispatcher.dispatch(UNDO_EVENT);
    };
    const redo = () => {
        dispatcherContext.dispatcher.dispatch(REDO_EVENT);
    };

    return (
        <div className="otherOperator">
            <div className="operator-content">
                <span title="Clear" className="operator-item">
                    <ClearAllIcon onClick={clearCanvas} />
                </span>
                <span title="Undo" className="operator-item">
                    <UndoIcon onClick={undo} />
                </span>
                <span title="Redo" className="operator-item">
                    <RedoIcon onClick={redo} />
                </span>
            </div>
            <span className="title">Other</span>
        </div>
    );
};

export default OtherOperator;
