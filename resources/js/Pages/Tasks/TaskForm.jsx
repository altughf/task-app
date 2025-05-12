import { useForm } from '@inertiajs/react';

export default function TaskForm({ task = null, onSubmit }) {
    const { data, setData, put, post, processing, errors } = useForm({
        name: task?.name || '',
        description: task?.description || '',
    });

    const submit = (e) => {
        e.preventDefault();
        onSubmit({ data, post, put });
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Görev Adı</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                />
                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Açıklama</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                />
                {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
            </div>

            <button
                type="submit"
                disabled={processing}
                className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
                    processing ? 'opacity-50' : ''
                }`}
            >
                Kaydet
            </button>
        </form>
    );
}
