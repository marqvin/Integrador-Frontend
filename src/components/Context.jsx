import React, { Component } from 'react';

export const DataContext = React.Context();

export class DataProvider extends Component {

    state = {
        /** Sei lá como add os produtos aki pra colocar no carrinho */

    }
    render(){

        const {products} = this.state;
        return (
            <DataContext.Provider value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

