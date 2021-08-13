const DrawingHistory = (() => {
    let history = [];
    let undoHistory = [];
    let currentStroke = {
        lines: [],
        color: '',
        size: 0,
    };

    const addToStroke = (x1, y1, x2, y2) => {
        currentStroke.lines[currentStroke.lines.length] = {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
        };
    };

    const setStrokeSize = (size) => {
        currentStroke.size = size;
    };

    const setColor = (color) => {
        currentStroke.color = color;
    };

    const endStroke = () => {
        history[history.length] = currentStroke;
        currentStroke = {
            lines: [],
            color: '',
            size: 0,
        };
    };

    const undo = () => {
        if (history.length > 0) {
            let undoStroke = history[history.length - 1];
            history.splice(history.length - 1);
            undoHistory[undoHistory.length] = undoStroke;
            return undoStroke;
        }
        return null;
    };

    const redo = () => {
        if (undoHistory.length > 0) {
            let redoStroke = undoHistory[undoHistory.length - 1];
            undoHistory.splice(undoHistory.length - 1);
            history[history.length] = redoStroke;
            return redoStroke;
        }
        return null;
    };

    return { addToStroke, setStrokeSize, setColor, endStroke, undo, redo }
})();

export default DrawingHistory;
