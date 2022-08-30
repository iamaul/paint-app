import * as React from "react";
import { ColorContext } from "../../../context";
import { ColorType } from "../../../utils/tool-type";
import { ColorPicker, createColor } from "material-ui-color";
import "./index.less";

interface ColorPanelProps {
    className?: string;
}

const colors = [
    {
        title: "Black",
        value: "#000000ff"
    },
    {
        title: "Grey",
        value: "#7f7f7fff"
    },
    {
        title: "Brown",
        value: "#880015ff"
    },
    {
        title: "Red",
        value: "#ed1c24ff"
    },
    {
        title: "Orange",
        value: "#ff7f27ff"
    },
    {
        title: "Yellow",
        value: "#fff200ff"
    },
    {
        title: "Green",
        value: "#22b14cff"
    },
    {
        title: "Blue",
        value: "#00a2e8ff"
    },
    {
        title: "Blue 2",
        value: "#3f48ccff"
    },
    {
        title: "Purple",
        value: "#a349a4ff"
    },
    {
        title: "White",
        value: "#ffffffff"
    },
    {
        title: "Grey-25%",
        value: "#c3c3c3ff"
    },
    {
        title: "Brown",
        value: "#b97a57ff"
    },
    {
        title: "Pink",
        value: "#ffaec9ff"
    },
    {
        title: "Orange Yellow",
        value: "#ffc90eff"
    },
    {
        title: "Crayon",
        value: "#efe4b0ff"
    },
    {
        title: "Green",
        value: "#b5e61dff"
    },
    {
        title: "Black Yellow",
        value: "#808000ff"
    },
    {
        title: "Cyan",
        value: "#99d9eaff"
    },
    {
        title: "Blue",
        value: "#7092beff"
    },
    {
        title: "Pink",
        value: "#c8bfe7ff"
    }
];

const activeColorTypeCls = "active-color-type";

const ColorPanel: React.FC<ColorPanelProps> = (props) => {
    const {className} = props;
    const [pickerColor, setPickerColor] = React.useState(createColor("#000000FF"));
    const colorContext = React.useContext(ColorContext);
    const activeColorType = colorContext.activeColor;

    React.useEffect(() => {
        colorContext.setColor(`#${pickerColor.hex}`);
    }, [pickerColor]);

    return (
        <div className={className ? `colorpanel ${className}` : "colorpanel"}>
            <div className="content">
                <div className="color-result">
                    <div onClick={() => colorContext.setActiveColor(ColorType.MAIN)} className={activeColorType === ColorType.MAIN ? `main-color ${activeColorTypeCls}` : "main-color"}>
                        <div className="color-box1" style={{backgroundColor: colorContext.mainColor}} />
                        <div>Color 1</div>
                    </div>
                    <div onClick={() => colorContext.setActiveColor(ColorType.SUB)} className={activeColorType === ColorType.SUB ? `sub-color ${activeColorTypeCls}` : "sub-color"}>
                        <div className="color-box2" style={{backgroundColor: colorContext.subColor}} />
                        <div>Color 2</div>
                    </div>
                </div>
                <div className="color-template">
                    {
                        colors.map((color) => (
                            <div onClick={() => colorContext.setColor(color.value)} key={color.value} className="color-template-item" style={{backgroundColor: color.value}} />
                        ))
                    }
                </div>
                <div className="color-picker">
                    <ColorPicker value={pickerColor} hideTextfield onChange={(color) => setPickerColor(color)} />
                    <div className="color-picker-title">Edit Color</div>
                </div>
            </div>
            <div className="title">Color</div>
        </div>
    );
};

export default ColorPanel;
