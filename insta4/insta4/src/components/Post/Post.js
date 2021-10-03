import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  margin: 16px 0;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`
const SecaoInputs = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Inputs = styled.input`
  border-radius: 20px;
  padding: 2px 8px;
  border: 1px solid grey;
  margin: 4px 0;
`

const Botao = styled.button`
  border-radius: 20px;
  border: 1px solid grey;
  background-color: #fff;
  cursor: pointer;
`

class Post extends React.Component {

  /* ======= ESTADO ========== */

  state = {
    post: [],

    usuario:"",
    foto:"",
    fotoUsuario:"",
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  postar = () => {
    const novoPost = {
      usuario: this.state.usuario,
      fotoUsuario: this.state.fotoUsuario,
      foto: this.state.foto
    }

    const novosPosts = [...this.state.post, novoPost]

    this.setState({ post: novosPosts })

   /*  this.setState({usuario: ""})
    this.setState({foto: ""})
    this.setState({fotoUsuario: ""}) */
  }

  onClickCurtida = () => {
    
    if(this.state.curtido === false){
      this.setState({
        curtido: this.state.curtido = true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }else {
      this.setState({
        curtido: this.curtido = false,
        numeroCurtidas: this.numeroCurtidas = 0
      })
    }
    
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onChangeUsuario = (e) => {
    this.setState({usuario: e.target.value})
  }
  
  onChangeFotoUsuario = (e) => {
    this.setState({fotoUsuario: e.target.value})
  }
  
  onChangeFoto = (e) => {
    this.setState({foto: e.target.value})
  }
  
  render() {
    let componenteComentario
    let iconeCurtida

    const post = this.state.post.map((postagem) => {
      return (
        <PostContainer>
          <PostHeader>

            <UserPhoto 
              src={this.state.fotoUsuario} 
              alt={'Imagem do usuario'}
            />

            <p>{this.state.usuario}</p>

          </PostHeader>

          <PostPhoto src={this.state.foto} alt={'Imagem do post'}/>

          <PostFooter>

            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
            {componenteComentario}
          </PostFooter>
        </PostContainer>

      )
    })


    if(this.state.curtido === true) {
      iconeCurtida= iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }


    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    
    return (
      <div>
        <SecaoInputs>
          <Inputs value={this.state.usuario} onChange={this.onChangeUsuario} placeholder={"Usuario"}></Inputs>
          <Inputs value={this.state.foto} onChange={this.onChangeFoto} placeholder={"foto"}></Inputs>
          <Inputs value={this.state.fotoUsuario} onChange={this.onChangeFotoUsuario} placeholder={"foto usuario"}></Inputs>
          <Botao onClick={this.postar}>POSTAR</Botao>
        </SecaoInputs>
        <div>
          {post}
        </div>
      </div>
    )
  }
}

export default Post