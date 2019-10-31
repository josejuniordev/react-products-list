import React, { Fragment, useEffect, useState } from 'react';
import ContentHeader from '../components/layout/content-header/ContentHeader';
import ContentBody from '../components/layout/content-body/ContentBody';

function HomePage(
  {
    match,
    location,
    history,
  }
) {
  return (
    <ContentHeader
      title='Empresa XPTO'
      titleComplement='Conheça todos os nossos produtos'
      description='Listagem de produtos - clique no produto desejado para saber mais'
      startEnhancer={() => <p>start</p>}
      endEnhancer={() => <p>end</p>}
    />
  )
}

export default HomePage;
