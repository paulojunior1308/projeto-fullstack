import React from 'react';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Arquivo selecionado - ${
        this.fileInput.current.files[0].name
      }`
    );
  }

  render() {
    const { goBack } = this.props;
    return (
      <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Upload de arquivo:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Enviar</button>
        <button onClick={goBack}>Voltar</button>
      </form>
    );
  }
}

export default FileInput;