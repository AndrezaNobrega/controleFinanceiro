import React, {Component} from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
//o reduxForm liga o formulário c o redux
//field uma tag para controlar os campos do formulário

//importações referentes ao redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import labelAndInput from "../common/form/labelAndInput";
import {init} from './billingCyclesActions'
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {

    calculateSummary(){
        const sum  = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d=> +d.value || 0).reduce(sum)

        }
            
    }

    render(){
        const { handleSubmit, readOnly, credits, debts } = this.props
        const {sumOfCredits, sumOfDebts} = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={labelAndInput} type='number' readOnly={readOnly}
                    label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field name='year' component={labelAndInput} type='number' readOnly={readOnly}
                    label='Ano' cols='12 4' placeholder='Informe o ano'/>
                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true}/>
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

//selector: recebe o estado como parametro e nome do atributo q vc quer extrair
const selector = formValueSelector('billingCycleForm')

//a gente recebe um array de créditos
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)

