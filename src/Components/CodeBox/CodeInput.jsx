import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

// eslint-disable-next-line react/prop-types
const CodeInput = ({code, setCode}) => {
    return (
        <AceEditor
            mode="javascript"
            theme="github"
            name="codeEditor"
            editorProps={{$blockScrolling: true}}
            value={code}
            onChange={setCode}
            className="w-full h-full"
        />
    );
};

export default CodeInput;
