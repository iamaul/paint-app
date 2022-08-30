import * as React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { ShapeOutlineContext, ShapeTypeContext, ToolTypeContext } from "../../../context";
import { ShapeOutlineType, ShapeToolType, ToolType } from "../../../utils/tool-type";
import "./index.less";

const selectedShapeClass = "selected-shape";

const shapes = [
    {
        type: ShapeToolType.LINE,
        img: "./icon/shape_line.svg",
        title: "Line"
    },
    {
        type: ShapeToolType.RECT,
        img: "./icon/shape_rect.svg",
        title: "Rect"
    },
    {
        type: ShapeToolType.CIRCLE,
        img: "./icon/shape_circle.svg",
        title: "Circle"
    },
    {
        type: ShapeToolType.RHOMBUS,
        img: "./icon/shape_rhombus.svg",
        title: "Diamond"
    },
    {
        type: ShapeToolType.TRIANGLE,
        img: "./icon/shape_triangle.svg",
        title: "Triangle"
    },
    {
        type: ShapeToolType.PENTAGON,
        img: "./icon/shape_pentagon.svg",
        title: "Pentagon"
    },
    {
        type: ShapeToolType.SEXANGLE,
        img: "./icon/shape_sexangle.svg",
        title: "Hexagon"
    },
    {
        type: ShapeToolType.ARROW_TOP,
        img: "./icon/shape_arrowtop.svg",
        title: "Arrow Top"
    },
    {
        type: ShapeToolType.ARROW_RIGHT,
        img: "./icon/shape_arrowright.svg",
        title: "Arrow Right"
    },
    {
        type: ShapeToolType.ARROW_DOWN,
        img: "./icon/shape_arrowdown.svg",
        title: "Arrow Down"
    },
    {
        type: ShapeToolType.ARROW_LEFT,
        img: "./icon/shape_arrowleft.svg",
        title: "Arrow Left"
    },
    {
        type: ShapeToolType.FOUR_STAR,
        img: "./icon/shape_fourstar.svg",
        title: "Star"
    }
];

interface ShapePanelProps {
    className?: string;
}

const ShapePanel: React.FC<ShapePanelProps> = (props) => {
    const {className} = props;
    const toolTypeContex = React.useContext(ToolTypeContext);
    const shapeOutlineContext = React.useContext(ShapeOutlineContext);

    return (
        <div className={className ? `shapepanel ${className}` : "shapepanel"}>
            <div className="shape-container">
                <div className="shape-content">
                    <ShapeTypeContext.Consumer>
                        {
                            ({type, setType}) => shapes.map((shape) => (
                                <img
                                    src={shape.img}
                                    key={shape.img}
                                    title={shape.title}
                                    className={type === shape.type && toolTypeContex.type === ToolType.SHAPE ? `shape-item ${selectedShapeClass}` : "shape-item"}
                                    onClick={() => setType(shape.type)}
                                />
                            ))
                        }
                    </ShapeTypeContext.Consumer>
                </div>
                <div className="shape-style">
                    <FormControl variant="outlined" disabled={toolTypeContex.type === ToolType.SHAPE ? false : true}>
                        <InputLabel>Outline</InputLabel>
                        <Select
                            value={shapeOutlineContext.type}
                            onChange={(event) => shapeOutlineContext.setType(event.target.value as ShapeOutlineType)}
                            label="Outline"
                        >
                            <MenuItem value={ShapeOutlineType.SOLID}>Solid</MenuItem>
                            <MenuItem value={ShapeOutlineType.DOTTED}>Dot</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="title">Shape</div>
        </div>
    );
};

export default ShapePanel;
