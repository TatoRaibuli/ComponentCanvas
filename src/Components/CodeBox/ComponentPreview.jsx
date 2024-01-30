// eslint-disable-next-line react/prop-types
const ComponentPreview = ({Component, error}) => {
    return (
        <div className="flex justify-center items-center bg-white shadow-inner h-full">
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <div className="p-4">{Component}</div>
            )}
        </div>
    );
};

export default ComponentPreview;
