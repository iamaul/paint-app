import * as React from "react";
import CreateTwoTone from "@material-ui/icons/CreateTwoTone";
import FormatColorFillTwoTone from "@material-ui/icons/FormatColorFillTwoTone";
import ColorizeTwoToneIcon from "@material-ui/icons/ColorizeTwoTone";
import { ToolType } from "../../../utils/tool-type";
import { ToolTypeContext } from "../../../context";
import "./index.less";

const selectedToolClass = "selected-tool";
export interface ToolPanelProps {
    className?: string;
}

const ToolPanel: React.FC<ToolPanelProps> = (props) => {
    const {className} = props;
    return (
        <div className={className ? `toolpanel ${className}` : "toolpanel"}>
            <ToolTypeContext.Consumer>
                {
                    ({type, setType}) => (
                        <>
                            <div className="top">
                                <span title="Pen">
                                    <CreateTwoTone className={type === ToolType.PEN ? `tool-item ${selectedToolClass}` : "tool-item"} onClick={() => {setType(ToolType.PEN)}} />
                                </span>
                                <span title="Erase">
                                    <img src="./icon/eraser.svg" className={type === ToolType.ERASER ? `tool-item ${selectedToolClass}` : "tool-item"} onClick={() => {setType(ToolType.ERASER)}} />
                                </span>
                                <span title="Fill">
                                    <FormatColorFillTwoTone className={type === ToolType.COLOR_FILL ? `tool-item ${selectedToolClass}` : "tool-item"} onClick={() => {setType(ToolType.COLOR_FILL)}} />
                                </span>
                            </div>
                            <div className="down">
                                <span title="Color Picker">
                                    <ColorizeTwoToneIcon className={type === ToolType.COLOR_EXTRACT ? `tool-item ${selectedToolClass}` : "tool-item"} onClick={() => {setType(ToolType.COLOR_EXTRACT)}} />
                                </span>
                            </div>
                        </>
                    )
                }
            </ToolTypeContext.Consumer>
            <div className="title">Tool</div>
        </div>
    );
};

export default ToolPanel;
