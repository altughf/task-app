import { useForm } from '@inertiajs/react';

export default function CategoryForm({ category = null, onSubmit }) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: category?.name || '',
        color: category?.color || '#FFFFFF',
    });

    const submit = (e) => {
        e.preventDefault();
        onSubmit({ data, post, put });
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            {/* Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                />
                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
            </div>

            {/* Color */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Color</label>
                <input
                    type="color"
                    value={data.color}
                    onChange={(e) => setData('color', e.target.value)}
                    className="w-full h-10 p-1 border border-gray-300 rounded"
                />
                {errors.color && <div className="text-red-500 text-sm">{errors.color}</div>}
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={processing}
                className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 ${
                    processing ? 'opacity-50' : ''
                }`}
            >
                Save
            </button>
        </form>
    );
}
