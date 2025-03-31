import React, { Fragment } from 'react'
// import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'
// import './Form.css'
class Subscribe extends React.Component {
    static defaultProps = {
      name: 'Casas in the Sun',
      subjectoffert: 'casasinthesun.eu', 
      action: 'https://formspree.io/f/xlepjnol', //test
      method: 'POST',
      successMessage: 'You are now added, thanks!',
      errorMessage: 'Something went wrong, please contact us via mail or WhatsApp.',
     
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
            alert: "Informationen inte skickad (I). Tack!",
            good: true,
            disabled: true
          })
            return
        }
        if (data.matrix !== '') {
          this.setState({
            alert: "Informationen inte skickad (E). Tack!",
            good: true,
            disabled: true
          })
            return
        }
        if (data.email !== '') {
            this.setState({
              alert: "Informationen inte skickad (E). Tack!",
              good: true,
              disabled: true
            })
              return
          }
    
        delete data.matrix;
        delete data.info;
        delete data.email;
        data._replyto = data.ep;
        data.amne = this.subjectoffert;
        
        this.setState({ disabled: true })
        fetch(form.action, {
          method: 'POST',
          mode: 'no-cors',
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            //'Content-Type': 'application/json'
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
              disabled: true
            })
          })
          .catch(err => {
            console.error(err)
            this.setState({
              disabled: true,
              good: false,
              alert: this.props.errorMessage
            })
          })
      }
    render() {
        const { name, subjectoffert, action } = this.props
   
    return (
        <Fragment>
            <section className="section-subscribe pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <section className="col-lg-6">
                          <div className="row w-100 m-0">
                            <div className={this.state.disabled? 'hidden' : ""}>
                                <p className="title">Newletter</p>
                                <span className="sbs-description">Subscribe to get the latest update on properties. Just provide your e-mail adress below.</span>
                            </div>
                            <div className={!this.state.disabled? 'hidden' : ""}>
                            {this.state.good && <p className="title">Thank you!</p>}
                            {!this.state.good && <p className="title">Something went wrong :(</p>}
                                <span className="sbs-description">{ this.state.alert }</span>
                            </div>
                          </div>
                        </section>
                        <section className="col-lg-6">
                          <div className={this.state.disabled? 'hidden' : ""}>
                              <div className="d-flex align-items-center justify-content-between w-100 h-100">
                                  <form
                                  className="Form"
                                  name={name}
                                  action={action}
                                  onSubmit={this.handleSubmit}
                                  
                                  >      
                                  <div className="row w-100 m-0">
                                      <div className="col-lg-9 col-sm-6">
                                          {!!subjectoffert && <input type="hidden" name="subject" value={subjectoffert} />}
                                            <input type="hidden" name="form-name" value={name} />
                                            <input autoComplete="off" className="Form--Shelf" type="text" name="email" placeholder="your matrix" defaultValue="" />
                                            <input autoComplete="off" className="Form--Shelf" type="text" name="info" placeholder="your info" defaultValue="" />
                                            <input autoComplete="off" className="Form--Shelf" type="text" name="matrix"  placeholder="your matrix"  defaultValue="" />
                                            <input autoComplete="off" className="Form--Shelf" type="text" name="info" placeholder="your info" defaultValue="" />    
                                            <input type="email" required  name="ep" placeholder='Din E-post' className="w-100 sbs-area-inp" />
                                      </div>
                                      <div className="col-lg-3 col-sm-6 d-flex align-items-center justify-content-between ">
                                          <input
                                              className="w-150 h-100 btn btn-dark"
                                              type="submit"
                                              value="Skicka"
                                              disabled={this.state.disabled}
                                          />
                                      </div>
                                  </div>
                                  </form>
                              </div>
                          </div>
                        </section>
                    </div>
                </div>
            </section>
        </Fragment>
    )
    }
}

export default Subscribe