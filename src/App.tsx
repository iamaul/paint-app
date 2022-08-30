import * as React from "react";
import Toolbar from "./components/tool-bar";
import Canvas from "./components/canvas";
import { ToolTypeContext, ShapeTypeContext, ShapeOutlineContext, LineWidthContext, ColorContext, DispatcherContext } from "./context";
import "./app.less";
import { ColorType, LineWidthType, ShapeOutlineType, ShapeToolType, ToolType } from "./utils/tool-type";
import Dispatcher from "./utils/dispatcher";

function App(): JSX.Element {
    const [toolType, setToolType] = React.useState<ToolType>(ToolType.PEN);
    const [shapeType, setShapeType] = React.useState<ShapeToolType>(ShapeToolType.LINE);
    const [shapeOutlineType, setShapeOutlineType] = React.useState<ShapeOutlineType>(ShapeOutlineType.SOLID);
    const [lineWidthType, setLineWidthType] = React.useState<LineWidthType>(LineWidthType.THIN);
    const [activeColorType, setActiveColorType] = React.useState<ColorType>(ColorType.MAIN);
    const [mainColor, setMainColor] = React.useState<string>("black");
    const [subColor, setSubColor] = React.useState<string>("white");
    const [dispatcher] = React.useState(new Dispatcher());

    const setColor = (value: string) => {
        if (activeColorType === ColorType.MAIN) {
            setMainColor(value);
        } else {
            setSubColor(value);
        }
    };

    return (
        <ToolTypeContext.Provider value={{type: toolType, setType: setToolType}}>
            <ShapeTypeContext.Provider value={{type: shapeType, setType: (type: ShapeToolType) => {setToolType(ToolType.SHAPE); setShapeType(type);}}}>
                <ShapeOutlineContext.Provider value={{type: shapeOutlineType, setType: setShapeOutlineType}}>
                    <LineWidthContext.Provider value={{type: lineWidthType, setType: setLineWidthType}}>
                        <DispatcherContext.Provider value={{dispatcher}}>
                            <ColorContext.Provider value={{
                                mainColor,
                                subColor,
                                activeColor: activeColorType,
                                setColor,
                                setActiveColor: setActiveColorType
                            }}>
                                <div className="app">
                                    <Toolbar />
                                    <Canvas
                                        toolType={toolType}
                                        shapeType={shapeType}
                                        shapeOutlineType={shapeOutlineType}
                                        mainColor={mainColor}
                                        subColor={subColor}
                                        lineWidthType={lineWidthType}
                                        setColor={setColor}
                                    />
                                </div>
                            </ColorContext.Provider>
                        </DispatcherContext.Provider>
                    </LineWidthContext.Provider>
                </ShapeOutlineContext.Provider>
            </ShapeTypeContext.Provider>
        </ToolTypeContext.Provider>
    );
}

export default App;
