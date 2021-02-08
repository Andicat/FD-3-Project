import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.PureComponent {

    static propTypes = {
        style: PropTypes.object,
        src: PropTypes.string,
    };

    static defaultProps = {
        style: {},
        src: '',
    };

    state = {
        style:{...this.props.style},
        src: this.props.src,
    }

    onClick = (evt) => {
        console.log('edit image');
        //edit(evt);
    }

    render () {
        return <img className="cv__image" src={this.state.src} style={this.state.style} alt='' onClick={this.onClick}/>;
    }
}

export default Image;
