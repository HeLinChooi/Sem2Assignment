import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, CustomInput } from 'reactstrap';
import { Link } from 'react-router-dom';
import BottomNav from '../BottomNavComponent';
import { getSearchResult } from '../../HTTPRequest';

class SearchArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    this.props.handleInputChange(e);
  }

  render() {
    console.log(this.props.minDist);
    return (
      <div className="container-fluid h-100 d-flex justify-content-center">

        <div className="row light-orange align-items-center justify-content-center">
          <div className="col-12 d-flex justify-content-center">
            <Form className="">

              <FormGroup row>
                <div className="col-12 d-flex justify-content-center">
                  <Label for="minDist">{`Maximum Cover Radius in km`}</Label>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <Label for="minDist">{`(Each step below represent 10km)`}</Label>
                </div>

                <div className="col-1 pr-0 py-3 d-flex flex-row-reverse"><span>0</span></div>

                <div className="col-10 py-3">
                  <CustomInput step={10} type="range" id="minDist" name="minDist" value={this.props.minDist} onChange={this.handleInputChange}>
                  </CustomInput>
                </div>

                <div className="col-1 p-0 py-3"><span>100</span></div>
              </FormGroup>

              <FormGroup row>
                <div className="col-12 d-flex justify-content-center">
                  <Link to="/result">
                    <Button className="bg-info">Search</Button>
                  </Link>
                </div>
              </FormGroup>

            </Form>
          </div>
        </div>

        <div className={"row fixed-bottom"}>
          <div className="col-12 m-0">
            <BottomNav />
          </div>
        </div>

      </div>
    );
  }
}

export default SearchArea;