import {useState} from "react";


// eslint-disable-next-line react/prop-types
const Modal = ({onSave, onClose}) => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Custom Component</h3>
                <input
                    type="text"
                    placeholder="Component Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-4 px-3 py-2 border rounded shadow-sm w-full"
                />
                <textarea
                    placeholder="Component Code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="mb-4 px-3 py-2 border rounded shadow-sm w-full h-32"
                />
                <div className="flex justify-end space-x-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => onSave(name, code)}>Save
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            onClick={onClose}>Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
