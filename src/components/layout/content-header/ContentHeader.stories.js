import React from 'react';
import { action } from '@storybook/addon-actions';
import ContentHeader from './ContentHeader';
import '../../../index.scss';
import SearchBar from '../../search-bar/SearchBar';
import ContentBody from '../content-body/ContentBody';

export default {
  component: ContentHeader,
  title: 'ContentHeader',
};

export const somenteTituloEPequeno = () => {
  return (
    <ContentBody>
      <ContentHeader
        title='XPTO Company'
        size='small'
      />
    </ContentBody>
  )
};

export const tituloComplementoEDescricao = () => {
  return (
    <ContentBody>
      <ContentHeader
        title='XPTO Company'
        titleComplement='Veja os produtos'
        description='Aqui você pode ver como tudo funciona direitinho'
      />
    </ContentBody>
  )
};

export const comEnhancersNaDireitaOuEsquerda = () => {
  return (
    <ContentBody>
      <ContentHeader
        title='XPTO Company'
        titleComplement='Veja os produtos'
        description='Aqui você pode ver como tudo funciona direitinho'
        startEnhancer={<p style={{margin: 0}}>na esquerda</p>}
        endEnhancer={<SearchBar />}
      />
    </ContentBody>
  )
};
