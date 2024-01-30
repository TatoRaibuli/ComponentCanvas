import {useState} from 'react';
import Modal from "../Modal/Modal.jsx";

const CustomComponents = () => {
    const [customComponents, setCustomComponents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addCustomComponent = (name, code) => {
        setCustomComponents([...customComponents, {name, code}]);
        setIsModalOpen(false);
    };

    return (
        <div className="p-4">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                onClick={() => setIsModalOpen(true)}
            >
                Add Custom Component
            </button>
            {isModalOpen && <Modal onSave={addCustomComponent} onClose={() => setIsModalOpen(false)}/>}
            <div className="mt-4">
                {customComponents.map((component, index) => (
                    <details key={index} className="mb-2 bg-gray-100 rounded-lg p-4 shadow">
                        <summary className="font-semibold cursor-pointer hover:text-blue-500">{component.name}</summary>
                        <pre className="mt-2 bg-gray-50 rounded p-2 overflow-x-auto"><code
                            className="text-xs">{component.code}</code></pre>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default CustomComponents;
