import React from 'react';
import Article from '../Article/Article';
import Chooseus from '../ChooseUs/Chooseus';
import Navigation from '../Navigation/Navigation';
import PopularDestination from '../PopularDestination/PopularDestination';
import ValueableTips from '../ValueableTips/ValueableTips';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <PopularDestination></PopularDestination>
            <ValueableTips></ValueableTips>
            <Chooseus></Chooseus>
            <Article></Article>
        </div>
    );
};

export default Home;