import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCatFact } from '../actions/catFactActions';

function CatFact({ CatFact, loading, error, fetchCatFact }) {
    useEffect(() => {
        fetchCatFact();
    }, [fetchCatFact]);

    if (loading) {
        return <p> Loading... </p>;
    }

    if (error) {
        return <p> Error: {error} </p>;
    }

    return (
        <div>
            <h2> Here's another good one... </h2>
            <p> {CatFact} </p>
        </div>
    );
}

const mapStateToProps = (state) => ({
    CatFact: state.CatFact.fact,
    loading: state.CatFact.loading,
    error: state.CatFact.error,
});

export default connect(mapStateToProps, { fetchCatFact })(CatFact);