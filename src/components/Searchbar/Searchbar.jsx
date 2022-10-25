import { Component } from "react";
import { PropTypes } from 'prop-types';
import style from './Searchbar.module.css'

export class Searchbar extends Component {
  state = {
    input: "",
  };

  
  onInputChange=(event)=>{
    const {value} = event.target;   
    this.setState({
      input:value
    })
  }

  onFormSubmit=(event)=>{
    event.preventDefault();
    const {input} = this.state;
    this.props.onSubmit(input);
  }

  render() {
    return (
      <>
        <header className={style.searchbar}>
          <form className={style.searchForm} onSubmit={this.onFormSubmit}>
            <button type="submit" className={style.searchFormButton}>             
              <span className={style.searchFormButtonLabel}></span>
            </button>

            <input
              className={style.searchFormInput}
              onChange={this.onInputChange}
              name="input"
              value={this.state.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images"
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes={
  onSubmit:PropTypes.func.isRequired,
}