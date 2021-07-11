import React from 'react';
import './Detail.css';

// function Detail(props) {
//     console.log(props);
//     return <span>Hello!</span>
// }


class Detail extends React.Component{
    componentDidMount() {
        const { location, history }= this.props;
        if(location.state == undefined ){
            history.push('/');
        }
    }

    render() {
        const { location, history }= this.props;
        if (location.state) {
        return (
            <span>{ location.state.title }</span>



        ); 
        } else {
            return null;
        }
    }
}
export default Detail;