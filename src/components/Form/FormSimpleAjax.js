import React, { Fragment } from 'react'
// import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Casas in the Sun',
    subjectoffert: 'casasinthesun.eu', 
    action: 'https://formspree.io/f/xlepjnol', //test
    method: 'POST',
    successMessage: 'Thanks for your inquiry, we will be in touch shortly!',
    errorMessage: 'Something went wrong, please contact us via e-mail or via WhatsApp.',
    
   
  }

  state = {
    alert: '',
    good: true,
    disabled: false,
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return
    const form = e.target
    const data = serialize(form)
    if (data.info !== '') {
      this.setState({
        alert: "Information sent (I). Thanks!",
        good: false,
        disabled: true
      })
        return
    }
    if (data.matrix !== '') {
      this.setState({
        alert: "Information sent (E). Thanks!",
        good: false,
        disabled: true
      })
        return
    }

    delete data.matrix;
    delete data.info;
    data._replyto = data.email;
    data.amne = data.subject + " : " + data.amne;
    
    this.setState({ disabled: true })
    fetch(form.action, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:  stringify(data),
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          console.log(res);
        // throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          good: true,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          good: false,
          alert: this.props.errorMessage
        })
      })
  }

  render() {
    const { name, subjectoffert, action, mode='default', flat='default', formMessage='Please send us a message here:'} = this.props

    return (
      <Fragment>
        <p>{formMessage}</p>
        
  {this.state.alert && this.state.good && (
        <div className="Form--Alert-Cool">{this.state.alert}</div>
      )}
   {this.state.alert && !this.state.good && (
        <div className="BadForm--Alert">{this.state.alert}</div>
      )}
    {/* OFFERT FORM BEGINS HERE */}
    {!this.state.alert &&
    <form
      className="Form"
      name={name}
      action={action}
      onSubmit={this.handleSubmit}
      
    >      
       
     <label className='Form--Label'>
      <input
        className='Form--Input  Form--InputText'
        type='text'
        placeholder='Name (Obligatory)'
        name='namn'
        required
      />
       <span>Name (Obligatory)</span>
    </label>
    <label className='Form--Label'>
      <input
        className='Form--Input Form--InputText'
        type='email'
        placeholder='E-mail (Obiligatory)'
        name='email'
        required
      />
       <span>E-mail (Obiligatory)</span>
    </label>
    {mode === 'default' && 
    <label className='Form--Label'>
      <input
        className='Form--Input Form--InputText'
        type='text'
        placeholder='Subject'
        name='amne'
        
      />
       <span>Ämne</span>
    </label>
  }
  {mode === 'flat' &&
    <input type="hidden" name="amne" value={flat} />
  }
    <label className='Form--Label'>
      <textarea
        className='Form--Input Form--Textarea Form--InputText'
        placeholder='Other relevant information'
        name='meddelande'
        rows='10'
     
      />
       {mode === 'default' && 
          <span>Message</span>
       }
       {mode === 'flat' &&
          <span>Other relevant information</span>
        }
    </label>

          {!!subjectoffert && <input type="hidden" name="subject" value={subjectoffert} />}
          <input type="hidden" name="form-name" value={name} />
         
          <label className="Form--Shelf"><span>email</span>
          <input autoComplete="off" className="Form--Shelf" type="text" name="matrix" placeholder="your matrix" defaultValue="" />
          </label>
         
          <label className="Form--Shelf"><span>info</span>
          <input autoComplete="off" className="Form--Shelf" type="text" name="info" placeholder="your info" defaultValue="" />
          </label>
         
          <label className="Form--Shelf"><span>email</span>
          <input autoComplete="off" className="Form--Shelf" type="text" name="matrix"  placeholder="your matrix"  defaultValue="" />
          </label>
         
          <label className="Form--Shelf"><span>info</span>
          <input autoComplete="off" className="Form--Shelf" type="text" name="info" placeholder="your info" defaultValue="" />
          </label>
          <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Send message"
            disabled={this.state.disabled}
          />
        </form>
           }
      </Fragment>
    )
  }
}

export default Form
