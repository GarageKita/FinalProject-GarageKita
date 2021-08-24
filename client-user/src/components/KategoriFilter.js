import React from "react";

export default function KategoriFilter(props) {

    const { categories } = props

    return (
        <div>

            <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                {/* <!-- Expand/collapse section button --> */}
                <p
                    className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-1"
                    aria-expanded="false"
                >
                    <span className="font-medium text-gray-900">
                    Filter bedasarkan Kategori
                    </span>
                </p>
                </h3>

                {/* <!-- FILTER --> */}
                <div className="pt-6" id="filter-section-1">
                <div className="space-y-4">
                    {categories.map((category, i) => {
                    return (
                        <div className="flex items-center">
                        <input
                            id={`category-${i}`}
                            name="category[]"
                            value="sale"
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                            htmlFor={`category-${i}`}
                            className="ml-3 text-sm text-gray-600"
                        >
                            {category}
                        </label>
                        </div>
                    );
                    })}
                </div>
                </div>
            </div>
            
        </div>
    );
}
