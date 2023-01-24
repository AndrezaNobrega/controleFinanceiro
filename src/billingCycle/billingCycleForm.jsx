import React, {Component} from "react";
import { reduxForm, Field } from "redux-form";
//o reduxForm liga o formulário c o redux
//field uma tag para controlar os campos do formulário

//importações referentes ao redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import labelAndInput from "../common/form/labelAndInput";
import {init} from './billingCyclesActions'

class BillingCycleForm extends Component {
    render(){
        const { handleSubmit, readOnly } = this.props
        console.log(handleSubmit)
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={labelAndInput} type='number' readOnly={readOnly}
                    label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field name='year' component={labelAndInput} type='number' readOnly={readOnly}
                    label='Ano' cols='12 4' placeholder='Informe o ano'/>
                </div>
                <div className="box-footer">
                      {/* essse submit vai submeter de fato o formulário 
                      já o button terá outra ação*/}
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default"
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
//destroyOnUnmount: false --> para ajudar no reuso das iniformações, msm usando o msm form

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)

