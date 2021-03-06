import { Form, Input, Button } from "antd";

import React from "react";
import Axios from "axios";

export default class CustomForm extends React.Component {
  handleFormSubmit = (event, requestType, articleID) => {
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    switch (requestType) {
      case "post":
        return Axios.post("http://127.0.0.1:8000/api/", {
          title: title,
          content: content
        })
          .then(res => console.log(res))
          .catch(error => console.err(error));

      case "put":
        return Axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
          title: title,
          content: content
        })
          .then(res => console.log(res))
          .catch(error => console.err(error));

      default:
        return;
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <Form.Item label="Title">
            <Input name="title" placeholder="Put your title here" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Put your content here" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
