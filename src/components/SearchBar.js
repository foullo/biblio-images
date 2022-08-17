import React from "react";

class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = (event) => { // arrow function bind the this keyword to the search function
        event.preventDefault();

        this.props.onSubmit(this.state.term)
    };

    render() {
        return (
            <div className="flex justify-center items-center mt-8">
                <div className="w-96 m-2">
                    <form onSubmit={this.onFormSubmit}>
                        <label className="mb-6 text-2xl font-medium text-gray-900"
                               htmlFor="default-search">
                            Biblio-Images
                        </label>
                        <div className="relative mt-6 mb-4">
                            <input
                                onChange={(e) => this.setState({ term: e.target.value})}
                                value={this.state.term}
                                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                type="text" placeholder="Cahors..." />
                            <button
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                                type="submit">Rechercher
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default SearchBar