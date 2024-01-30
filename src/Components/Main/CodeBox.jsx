import React, {useState, useEffect} from 'react';
import * as Babel from '@babel/standalone';
import ComponentPreview from "../CodeBox/ComponentPreview.jsx";
import CodeInput from "../CodeBox/CodeInput.jsx";


const CodeBox = () => {
    const [code, setCode] = useState('');
    const [Component, setComponent] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        try {
            const {code: transpiledCode} = Babel.transform(code, {
                presets: ['react']
            });

            const renderFunc = new Function('React', `return ${transpiledCode}`);
            setComponent(renderFunc(React));
        } catch (err) {
            setError(err.message);
        }
    }, [code]);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="w-1/2 h-full p-4">
                <CodeInput code={code} setCode={setCode}/>
            </div>
            <div className="w-1/2 h-full p-4">
                <ComponentPreview Component={Component} error={error}/>
            </div>
        </div>
    );
};

export default CodeBox;
