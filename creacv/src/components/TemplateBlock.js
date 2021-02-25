import React from 'react';
import PropTypes from 'prop-types';

import CVElement from './CVElement';

import {connect} from 'react-redux';
import {cvBlock_add} from '../redux/cvDataAC';
import {getAutoSize} from './utils';

class TemplateBlock extends React.PureComponent {

    static propTypes = {
        id: PropTypes.number.isRequired,
        data: PropTypes.object.isRequired,
    };

    onClick = (evt) => {
        let sizesAuto = getAutoSize(evt.target.previousSibling);
        let deepCopyBlock = JSON.parse(JSON.stringify(this.props.data));
        this.props.dispatch(cvBlock_add({...deepCopyBlock, width:sizesAuto.width, height:sizesAuto.height}));
    }

    render () {
        let elementCode = null;
        //debugger
        //if (this.props.data.type==='group') {
        //    elementCode = <CVElementGroup  blockId={this.props.id} cv={false} data={this.props.data} activeElementId={this.props.activeElementId}></CVElementGroup>;
        //} else {
            //let elementId = this.props.id + '-' + 0;
            elementCode = <CVElement key={'' + this.props.id} id={'' + this.props.id} blockId={this.props.id} cv={false} data={this.props.data} active={false}></CVElement>;
        //}
        return (    
            <li className='template-panel__block'>
                <div className='template-panel__block-view'>
                    {elementCode}
                </div>
                <button className='template-panel__block-add' onClick={this.onClick}></button>
            </li>
        );
    }
}

export default connect()(TemplateBlock);