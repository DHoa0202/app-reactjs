import React from "react";
import ListProduct from '../parts/ListProduct'
import FilterProduct from '../parts/FilterProduct';

class Content extends React.Component {
    render() {
        let state = this.props['state'];
        return <div className='container-fluid'>
            <div className='row' style={{ backgroundColor: '#282c34', color: '#ffffff' }}>
            <div className='col-lg-8 overflow-auto' style={{maxHeight: '80vh'}}>
                    {/* <ListProduct state={state} qty={3} heading={'default'}/> */}
                    <ListProduct state={state} qty={4} heading={'horizontal'} type={'hr'}/>
                    {/* <ListProduct state={state} qty={3} heading={'vertical'} type={'vr'}/> */}
                </div>
                <div className='col-lg-4'>
                    <FilterProduct state={state} />
                </div>
            </div>
        </div>
    }
}

export default Content;