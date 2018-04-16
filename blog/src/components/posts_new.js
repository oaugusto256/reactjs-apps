import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmitPost(values) {
    console.log(values);
  }
  
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>New post</h3>
        <form onSubmit={handleSubmit(this.onSubmitPost.bind(this))}>
          <Field
            label="Title for post"
            name="title"
            component={this.renderField}
          />
          <Field 
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field 
            label="Post content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>        
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);