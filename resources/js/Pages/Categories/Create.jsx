import AppLayout from '@/Layouts/AppLayout';
import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        color: '#FFFFFF',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('categories.store'));
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Category</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
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

                {/* Back */}
                <div className="pt-4">
                    <Link
                        href={route('categories.index')}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
                    >
                        Go Back
                    </Link>
                </div>
            </form>
        </div>
    );
}

Create.layout = (page) => <AppLayout children={page} />;
