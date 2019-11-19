import React, { Component } from 'react';
import $ from 'jquery';
class Regist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '123',
            password: '456',
        };
        this.url = "https://www.kaylecn.com/regist";

    }



    post_data(props) {
        console.log(this.props.state)
        $.ajax({
            type:'POST',
            url: this.props.url,
            data:this.props.state,
            dataType: 'json',
            success: function (e) {
                console.log(e)
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
}

export default Regist