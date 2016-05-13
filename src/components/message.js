import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
	  margin: 12,
};

const Message = () => ( 
	<div className='test-class'>
		Hello world this is React
		<br/>
		<RaisedButton label="Test" primary={true} style={buttonStyle} />
	</div>
);

export default Message;
